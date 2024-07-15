// server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
const port = 3000; 

app.use(cors());

// data for materials
const materials = [
    {
        "material": "Agar Mixture",
        "environment": "Microbes, underwater (Aquatic-like)",
        "initial cross-section": [3, 3],
        "initial tensile strength": 0.89,
        "time": [0.0, 1.0, 5.0, 15.0],
        "tensile strength percentage": [1, 0.481876333, 0.171286425, 0.033404407],
        "tensile std": [0, 0.06357378, 0.029027118, 0.010731819]
    },
    {
        "material": "Agar Mixture",
        "environment": "80% Relative Humidity, 30 degrees Celsius (Forest-like)",
        "initial cross-section": [3, 3],
        "initial tensile strength": 0.89,
        "time": [0.0, 20.0, 60.0, 4320.0, 11520.0, 20160.0],
        "tensile strength percentage": [1, 0.756944444, 0.631944444, 0.43287037, 0.217592593, 0.081018519],
        "tensile std": [0, 0.020833333, 0.048611111, 0.152777778, 0.125, 0.076388889]
    },
    {
        "material": "Alginate",
        "environment": "Microbes, underwater (Aquatic-like)",
        "initial cross-section": [3, 3],
        "initial tensile strength": 2.5,
        "time": [0.0, 1.0, 2880.0, 11520.0, 17280],
        "tensile strength percentage": [1, 0.24, 0.19, 0.1, 0.06],
        "tensile std": [0, 0.05, 0.05, 0.04, 0.04]
    },
    {
        "material": "Beeswax",
        "environment": "20% Relative Humidity, 40 degrees Celsius (Desert-like)",
        "initial cross-section": [3, 3],
        "initial tensile strength": 1.07,
        "time": [0.0, 1.0, 3.0, 15.0],
        "tensile strength percentage": [1, 0.32, 0.16, 0.04],
        "tensile std": [0, 0.07, 0.03, 0.01]
    },
    {
        "material": "Beeswax",
        "environment": "0% Relative Humidity, 70 degrees Celsius (Wildfire-induced)",
        "initial cross-section": [3, 3],
        "initial tensile strength": 1.07,
        "time": [0.0, 1.0],
        "tensile strength percentage": [1, 0.3],
        "tensile std": [0, 0.1]
    },
    {
        "material": "Carnauba wax",
        "environment": "0% Relative Humidity, 70 degrees Celsius (Wildfire-induced)",
        "initial cross-section": [3, 3],
        "initial tensile strength": 2.26,
        "time": [0.0, 1.0, 2.0],
        "tensile strength percentage": [1, 0.32, 0.0],
        "tensile std": [0, 0.1, 0.0]
    },
    {
        "material": "Soluable paper",
        "environment": "Microbes, underwater (Aquatic-like)",
        "initial cross-section": [3, 0.5],
        "initial tensile strength": 23.25,
        "time": [0.0, 0.0167],
        "tensile strength percentage": [1, 0],
        "tensile std": [0, 0]
    },
    {
        "material": "Magnesium",
        "environment": "pH 4, underwater (Acidification)",
        "initial cross-section": [3, 0.05],
        "initial tensile strength": 183,
        "time": [0.0, 360.0, 1440.0, 2880.0],
        "tensile strength percentage": [1, 0.79, 0.3, 0.05],
        "tensile std": [0, 0.05, 0.1, 0.05]
    }
];

// Example endpoint to fetch all materials
app.get('/materials', (req, res) => {
    res.json(materials);
});

// Example endpoint to fetch a specific material by its index
app.get('/materials/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < materials.length) {
        res.json(materials[index]);
    } else {
        res.status(404).send('Material not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});