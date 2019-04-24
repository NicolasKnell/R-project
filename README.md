# Projet de DataViz - Buts de Cristiano Ronaldo
Travail effectué par Nicolas KNELL et Abderrahman QOHAFA

Lien vers le Gitgub: https://github.com/bigabdoo7/R-project

Lien vers la page web(html): https://bigabdoo7.github.io/R-project


Nous avons extrait les données du site: [transfermarkt](https://www.transfermarkt.com/cristiano-ronaldo/alletore/spieler/8198/saison//verein/0/liga/0/wettbewerb//pos/0/trainer_id/0/minute/0/torart/0)

Le script python qui fait l'extraction se trouve dans le notebook [scrapGoals.ipynb](#) et le dataset resultant est [goals.csv](#) (tous ces documents se trouvent sur [ce GitHub](https://github.com/bigabdoo7/R-project))

Ces données correspondent au nombre de buts marqués en club par Cristiano Ronaldo au cours de sa carrière. Ayant été faite le 16 avril 2019, les matchs postérieurs ne sont pas représentés.

Nous avons décidé de présenter le nombre de buts marqués par Ronaldo en fonction des adversaires mais aussi en fonction de la compétition.
La présentation se trouve [ici](https://bigabdoo7.github.io/R-project)

Après réflexion, nous avons constaté que notre présentation du nombre moyen de buts marqués par adversaire était inexacte. En effet, les matchs pris en compte dans le dataset sont seulement ceux où Ronaldo a marqué. Il peut donc manquer des matchs.
