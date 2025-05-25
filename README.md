# Collectify

**Collectify** és una aplicació web dissenyada per ajudar els usuaris a gestionar i organitzar les seves col·leccions personals de manera eficient. Aquest projecte ha estat desenvolupat per **David Juncosa** i **Javier Pedragosa** com a part de l'assignatura de **Programació** en el curs **DAW 1**.

---

## Arquitectura i Estructura de Carpetes

El projecte està dividit en dues parts principals: **frontend** i **backend**, seguint una arquitectura client-servidor. A continuació es detalla l'estructura de carpetes:

### **Backend**
El backend està desenvolupat amb **Node.js** i **Express**, utilitzant **MongoDB** com a base de dades per emmagatzemar les col·leccions i els ítems.

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

### **Frontend**
El frontend està desenvolupat amb **Vue.js** i utilitza **Vite** com a eina de construcció per a un desenvolupament ràpid i eficient.

```
frontend/
├── index.html          # Punt d'entrada del frontend
├── package.json        # Dependències i scripts del projecte
├── vite.config.js      # Configuració de Vite
├── public/
│   ├── css/
│   │   └── style.css   # Estils globals
│   └── img/            # Recursos d'imatges
├── src/
│   ├── App.vue         # Component principal
│   ├── main.js         # Punt d'entrada de Vue
│   ├── components/     # Components Vue
│   │   ├── CollectionForm.vue
│   │   ├── CollectionList.vue
│   │   └── CollectionDetail.vue
│   ├── models/         # Models de dades
│   │   ├── Collection.js
│   │   └── Item.js
│   ├── services/       # Serveis per a les API
│   │   └── api.js
│   └── views/          # Vistes (actualment buida)
```

---

## Instal·lació i Execució

### **Requisits previs**
- **Node.js** (versió 16 o superior)
- **npm** (gestor de paquets de Node.js)
- **MongoDB** (base de dades)

### **Passos per a la instal·lació**

#### 1. Clonar el repositori
```bash
git clone https://github.com/usuari/collectify.git
cd collectify
```

#### 2. Configurar el backend
1. Accedir a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Instal·lar les dependències:
   ```bash
   npm install
   ```
3. Configurar les variables d'entorn al fitxer `.env`:
   ```env
   MONGO_URI=mongodb://localhost:27017/Collectify
   PORT=5000
   ```
4. Iniciar el servidor:
   ```bash
   npm start
   ```

#### 3. Configurar el frontend
1. Accedir a la carpeta del frontend:
   ```bash
   cd ../frontend
   ```
2. Instal·lar les dependències:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desenvolupament:
   ```bash
   npm run dev
   ```

4. Obrir el navegador i accedir a:
   ```
   http://localhost:5173
   ```

---

## Nota
Aquest projecte ha estat desenvolupat exclusivament per a finalitats educatives com a part de l'assignatura de **Programació** en el curs **DAW 1** a l'INS Daniel Blanxart.