# Collectify Frontend

Aquest és el frontend del projecte **Collectify**, una aplicació web dissenyada per ajudar els usuaris a gestionar i organitzar les seves col·leccions personals de manera eficient i intuïtiva.

---

## Taula de Continguts
- [Descripció General](#descripció-general)
- [Funcionalitats](#funcionalitats)
- [Tecnologies Utilitzades](#tecnologies-utilitzades)
- [Estructura de Carpetes](#estructura-de-carpetes)
- [Instruccions d'Instal·lació](#instruccions-dinstal·lació)
- [Ús](#ús)
- [Contribució](#contribució)
- [Llicència](#llicència)

---

## Descripció General

El frontend de **Collectify** està desenvolupat amb **Vue.js** i proporciona una interfície d'usuari moderna, responsiva i fàcil d'utilitzar per gestionar col·leccions. Es comunica amb l'API del backend per obtenir i sincronitzar dades en temps real.

---

## Funcionalitats

- **Gestió de Col·leccions**: Crear, editar i eliminar col·leccions.
- **Gestió d'Ítems**: Afegir, modificar i eliminar ítems dins de les col·leccions.
- **Disseny Responsiu**: Adaptat per a dispositius mòbils i escriptoris.
- **Sincronització en Temps Real**: Comunicació amb el backend per mantenir les dades actualitzades.
- **Interfície Intuïtiva**: Navegació senzilla i experiència d'usuari optimitzada.

---

## Tecnologies Utilitzades

- **Framework**: Vue.js
- **Eina de Construcció**: Vite
- **Estils**: CSS personalitzat
- **Gestió d'Estat**: Refs i computed properties de Vue.js
- **Client HTTP**: Fetch API
- **Animacions**: Transicions CSS per a una experiència més dinàmica

---

## Estructura de Carpetes

```
frontend/
├── .gitignore          # Fitxer per ignorar arxius al repositori
├── index.html          # Punt d'entrada del frontend
├── package.json        # Dependències i scripts del projecte
├── README.md           # Documentació del frontend
├── vite.config.js      # Configuració de Vite
├── .vscode/
│   └── extensions.json # Extensions recomanades per a l'editor
├── public/
│   ├── css/
│   │   └── style.css   # Estils globals
│   └── img/            # Recursos d'imatges
│       ├── Collectify_Logo_Simple.svg
│       └── Collectify_Logo.png
├── src/
│   ├── App.vue         # Component principal
│   ├── main.js         # Punt d'entrada de Vue
│   ├── assets/         # Recursos addicionals
│   │   └── vue.svg
│   ├── components/     # Components Vue
│   │   ├── CollectionDetail.vue
│   │   ├── CollectionForm.vue
│   │   └── CollectionList.vue
│   ├── models/         # Models de dades
│   │   ├── Collection.js
│   │   └── Item.js
│   └── services/       # Serveis per a les API
│       └── api.js
```

---

## Instruccions d'Instal·lació

### **Requisits previs**
- **Node.js** (versió 16 o superior)
- **npm** (gestor de paquets de Node.js)

### **Passos per a la instal·lació**

1. **Clonar el repositori**:
    ```bash
    git clone https://github.com/usuari/collectify.git
    cd collectify/frontend
    ```

2. **Instal·lar les dependències**:
    ```bash
    npm install
    ```

3. **Iniciar el servidor de desenvolupament**:
    ```bash
    npm run dev
    ```

4. **Accedir a l'aplicació**:
    Obre el navegador i navega a:
    ```
    http://localhost:5173
    ```

---

## Ús

1. **Navegació**:
   - A la pàgina principal, pots veure totes les col·leccions creades.
   - Fes clic a una col·lecció per veure els seus ítems.

2. **Gestió de Col·leccions**:
   - Utilitza el formulari per crear noves col·leccions.
   - Edita o elimina col·leccions existents amb els botons corresponents.

3. **Gestió d'Ítems**:
   - Afegeix ítems a una col·lecció des de la seva pàgina de detalls.
   - Edita o elimina ítems directament des de la mateixa pàgina.

4. **Sincronització**:
   - Assegura't que el servidor del backend estigui en funcionament per a una experiència completa.

---

## Contribució

Les contribucions són benvingudes! Si vols col·laborar, segueix aquests passos:

1. Fes un fork del repositori.
2. Crea una nova branca:
    ```bash
    git checkout -b nova-funcionalitat
    ```
3. Fes els teus canvis i crea un commit:
    ```bash
    git commit -m "Afegeix nova funcionalitat"
    ```
4. Puja els canvis a la teva branca:
    ```bash
    git push origin nova-funcionalitat
    ```
5. Obre una pull request.

---

## Llicència

Aquest projecte està llicenciat sota la [Llicència MIT](LICENSE).

---

Aquest frontend ha estat desenvolupat com a part del projecte **Collectify** per **David Juncosa** i **Javier Pedragosa** en l'assignatura de **Programació** del curs **DAW 1**.
