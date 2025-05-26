<?php



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog breed matcher</title>
    <link rel="stylesheet" href="Dog_Matcher.css">
    <script src="Dog_Matcher.js" defer></script>
</head>
<body>
    <div class="main-container">
        <div class="top-box-container">
            <h1 class="header">Dog Breed Matcher</h1>
            <div class="width-container">
                <div id="search-container">
                    <input type="text" id="search_bar" onkeyup="searchFunction()" placeholder="Search for a dog breed...">
                </div>
                <div id="matcher" class="matcher">
                    <div class="size-container match-container">
                        <label for="size"><b>Koko</b></label>
                        <select name="size" id="size" class="selector">
                            <option value="all">Näytä kaikki</option>
                            <option value="large">Suuret koirat</option>
                            <option value="medium">Keskikokoiset koirat</option>
                            <option value="small">Pienet koirat</option>
                        </select>
                    </div>
                    <div class="social-container match-container">
                        <label for="social"><b>Seurallisuus</b></label>
                        <select name="social" id="social" class="selector">
                            <option value="all">Näytä kaikki</option>
                            <option value="very">Seurallisimmat koirat</option>
                            <option value="medium">Melko seuralliset koirat</option>
                            <option value="little">Omissa oloissaan viihtyvät koirat</option>
                        </select>
                    </div>
                    <div class="exercise-container match-container">
                        <label for="exercise"><b>Liikunnallisuus</b></label>
                        <select name="exercise" id="exercise" class="selector">
                            <option value="all">Näytä kaikki</option>
                            <option value="very">Liikunnallisimmat koirat</option>
                            <option value="medium">Melko liikunnaliset koirat</option>
                            <option value="little">Vähemmän liikunnalliset koirat</option>
                        </select>
                    </div>
                    <div class="fur-container match-container">
                        <label for="fur"><b>Turkin vaativuus</b></label>
                        <select name="fur" id="fur" class="selector">
                            <option value="all">Näytä kaikki</option>
                            <option value="easy">Helppohoitoinen turkki</option>
                            <option value="medium">Turkki voi vaatia työtä</option>
                            <option value="hard">Haastavakin turkki käy</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- <button onclick="test()">test</button> -->
        </div>
        <div class="box-container">
            <h1 class="header">Dog breeds</h1>
            <div id="dog-display">
            <div id="koiraton">Ei koiria</div>
            </div>
        </div>
    </div>
</body>
</html>