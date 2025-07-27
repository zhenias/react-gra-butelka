"use client";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button/Button";
import DialogModal from "@/app/components/Dialog/Dialog";
import BoxText from "@/app/components/Box/Box";
import { TextField, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SelectPlayers() {
    const [open, setOpen] = useState(false);
    const [openAllowedMax, setOpenAllowedMax] = useState(false);
    const [players, setPlayers] = useState<string[]>([""]);
    const [openBezGraczy, setOpenBezGraczy] = useState(false);

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const handleOpenModalAllowedMax = () => setOpenAllowedMax(true);
    const handleCloseModalAllowedMax = () => setOpenAllowedMax(false);

    const handleOpenModalBezGraczy = () => setOpenBezGraczy(true);
    const handleCloseModalBezGraczy = () => setOpenBezGraczy(false);

    useEffect(() => {
        const saved = localStorage.getItem("players");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) setPlayers(parsed);
            } catch {}
        }
    }, []);

    const handlePlayerChange = (index: number, value: string) => {
        const newPlayers = [...players];
        newPlayers[index] = value;
        setPlayers(newPlayers);
    };

    const handleAddPlayer = () => {
    
        if (players.length >= 5) {
            handleOpenModalAllowedMax();

            return;
        }

        setPlayers([...players, ""]);
    };

    const handleRemovePlayer = (index: number) => {
        const newPlayers = players.filter((_, idx) => idx !== index);
        setPlayers(newPlayers.length ? newPlayers : [""]);
    };

    const handleSavePlayers = () => {
        const hasValidPlayers = players.every(player => player.trim() !== "");

        if (!hasValidPlayers) {
            handleOpenModalBezGraczy();
            return;
        }

        localStorage.setItem("players", JSON.stringify(players));

        handleOpenModal();
    };

    return (
        <>
            <BoxText 
                sx={{
                    marginTop: 30,
                    marginBottom: 30,
                    width: 600,
                    backgroundColor: 'whitesmoke',
                    padding: 5,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    overflowY: 'auto',
                    borderRadius: '3px',
                    boxShadow: '0 0 4px 1px #00000038'
                }}
            >
                {players.map((player, idx) => (
                    <BoxText 
                        key={idx}
                        sx={{
                            marginBottom: '20px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            sx={{ width: '80%' }}
                            label={`Gracz ${idx + 1}`}
                            variant="standard"
                            value={player}
                            onChange={e => handlePlayerChange(idx, e.target.value)}
                        />
                        <IconButton
                            aria-label="Usuń gracza"
                            color="error"
                            sx={{ marginLeft: 1 }}
                            onClick={() => handleRemovePlayer(idx)}
                            disabled={players.length === 1}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </BoxText>
                ))}
                <BoxText
                    sx={{
                        gap: 3,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button variant="action" onClick={handleAddPlayer}>
                        Dodaj gracza
                    </Button>
                    <Button variant="action" color="error" onClick={handleSavePlayers}>
                        Zapisz, i dalej do gry
                    </Button>
                </BoxText>
                <DialogModal
                    title="Informacja"
                    message="Gracze zostali dodani do pamięci. <br> Możesz rozpocząć teraz grę :)"
                    open={open}
                    onClose={handleCloseModal}
                />
                <DialogModal
                    title="Informacja"
                    message="W grze może grać maksymalnie do 5 graczy :/"
                    open={openAllowedMax}
                    onClose={handleCloseModalAllowedMax}
                />
                <DialogModal
                    title="Pytanie?"
                    message="Chcesz grać, bez graczy? - to nie jest ciekawe :("
                    open={openBezGraczy}
                    onClose={handleCloseModalBezGraczy}
                />
            </BoxText>
        </>
    );
}