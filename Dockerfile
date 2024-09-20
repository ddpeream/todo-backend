# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Compilar la aplicación
RUN npm run build

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]