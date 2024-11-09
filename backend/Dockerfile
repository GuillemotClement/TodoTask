# on part d'une image de node 23 alpine qui est une version allégée.
FROM node:23-alpine

# Création du folder de travail
WORKDIR /app

# copie le package.json dans le répertoire de travail (app)
COPY package*.json .

# installation des dépendances
RUN npm install

# on expose le port 
EXPOSE 3000