# Kuvaus

HY:n kurssin fullstack-open [osan 10](https://fullstackopen.com/en/part10/) palautusrepo.

## Huomautus

Selaimesta aika paljon asia näyttää olevalta rikki, Expo App:in kautta kuitenkin näyttää hyvältä `OnePlus Nord CE2` :ssa.

## Vinkki

Itse siirryin monen langattoman verkoston välillä kurssin tän osan suorituksen aikana, vetämättä uusia riippuvuuksia tuli tää override tolle `APOLLO_URI` :lle:

```sh
WIFI=wlp0s20f3 APOLLO_URI="http://$(ip a show $WIFI | grep -Po '(?<=inet )[^\/]+'):4000" npx expo start --clear
```

yllä komentoa suoritin jokaisen (verkosto)vaihdon yhteydessä, jossa `WIFI` on langattoman network interface .
