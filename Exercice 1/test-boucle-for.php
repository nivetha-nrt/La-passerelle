<?php

// Compteur de 1 à 100

echo 'Je sais compter jusqu\'à 100, la preuve :<br>';
for ($i = 1; $i <= 100; $i++) {
    echo $i . ' ';
}
echo '<br>';
echo '<br>';

// Compteur de 100 à 1

echo 'Je sais aussi compter de 100 à 1, la preuve :<br>';
for ($i = 100; $i >= 1; $i--) {
    echo $i . ' ';
}
echo '<br>';

// Compteur de 5 en 5 à 100

echo 'Je sais compter de 5 en 5 :<br>';
for ($i = 0; $i <= 100; $i+=5) {
    echo $i . ' ';
}
echo '<br>';