# Collectify Backend

Aquest és el backend del projecte **Collectify**, una aplicació web dissenyada per ajudar els usuaris a gestionar i organitzar les seves col·leccions personals de manera eficient. El backend proporciona una API RESTful per gestionar col·leccions i ítems, i està desenvolupat amb **Node.js**, **Express** i **MongoDB**.

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

El backend de **Collectify** és responsable de gestionar les dades de les col·leccions i els ítems. Proporciona una API RESTful que permet crear, llegir, actualitzar i eliminar col·leccions i ítems. També inclou funcionalitats per gestionar ítems dins de col·leccions.

---

## Funcionalitats

- **Gestió de Col·leccions**:
  - Crear, editar i eliminar col·leccions.
  - Obtenir totes les col·leccions o una col·lecció específica.

- **Gestió d'Ítems**:
  - Afegir, modificar i eliminar ítems dins de col·leccions.
  - Obtenir ítems d'una col·lecció específica.

- **Base de Dades**:
  - Utilitza **MongoDB** per emmagatzemar col·leccions i ítems.

---

## Tecnologies Utilitzades

- **Node.js**: Plataforma per executar JavaScript al servidor.
- **Express**: Framework per construir l'API RESTful.
- **MongoDB**: Base de dades NoSQL per emmagatzemar les dades.
- **Mongoose**: Llibreria per interactuar amb MongoDB.
- **dotenv**: Per gestionar variables d'entorn.
- **cors**: Per permetre sol·licituds entre dominis.

---

## Estructura de Carpetes

```
backend/
├── .env                # Configuració d'entorn
├── app.js              # Punt d'entrada de l'aplicació
├── package.json        # Dependències i scripts del projecte
├── config/
│   └── db.js           # Configuració de la connexió a MongoDB
├── controllers/
│   └── controller.js   # Lògica dels controladors
├── models/
│   └── item.js         # Models de dades (Col·leccions i Ítems)
├── routes/
│   ├── collections.js  # Rutes per a les col·leccions
│   └── items.js        # Rutes per als ítems
```

---

## Instruccions d'Instal·lació

### **Requisits previs**
- **Node.js** (versió 16 o superior)
- **npm** (gestor de paquets de Node.js)
- **MongoDB** (base de dades)

### **Passos per a la instal·lació**

1. **Clonar el repositori**:
    ```bash
    git clone https://github.com/usuari/collectify.git
    cd collectify/backend
    ```

2. **Instal·lar les dependències**:
    ```bash
    npm install
    ```

3. **Configurar les variables d'entorn**:
    Crea un fitxer `.env` a la carpeta `backend` amb el següent contingut:
    ```env
    MONGO_URI=mongodb://localhost:27017/Collectify
    PORT=5000
    ```

4. **Iniciar el servidor**:
    ```bash
    npm start
    ```

5. **Verificar el funcionament**:
    Accedeix a l'API al següent URL:
    ```
    http://localhost:5000/api/collections
    ```

---

## Ús

### **Endpoints Principals**

#### **Col·leccions**
- **GET /api/collections**: Obtenir totes les col·leccions.
- **POST /api/collections**: Crear una nova col·lecció.
- **PUT /api/collections/:id**: Actualitzar una col·lecció existent.
- **DELETE /api/collections/:id**: Eliminar una col·lecció.

#### **Ítems**
- **POST /api/collections/:id/items**: Afegir un ítem a una col·lecció.
- **PUT /api/collections/:collectionId/items/:itemId**: Actualitzar un ítem dins d'una col·lecció.
- **DELETE /api/collections/:collectionId/items/:itemId**: Eliminar un ítem d'una col·lecció.

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

Aquest backend ha estat desenvolupat com a part del projecte **Collectify** per **David Juncosa** i **Javier Pedragosa** en l'assignatura de **Programació** del curs **DAW 1**.