<h1 align="center"> 
	🚧 Biblioteca Full Stack (Spring + React) 🚧
</h1>

<p align="center">
	<img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green">
</p>

## 💻 Sobre o projeto

O projeto tem a finalidade aprofundar os conhecimentos nessas duas tecnologias.


---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

* Java
* React
* Spring
* PostgreSQL
* Insomnia

---

## 💻 Requisitos

Antes de iniciar, você deve ter o Node.js, Java, PostgreSQL e o NPM instalados em sua máquina.

### Clonando o Repositório

Clone este repositório em sua máquina local:

```bash
https://github.com/Rvictorio/biblioteca
```

## ⚙️ Usando

Primeiro, você deve clonar o projeto na sua máquina.

```bash
cd frontend-biblioteca
```

Para inicializar o front end, precisamos primeiro das dependências, execute o seguinte comando:

```bash
npm install
```

Configure também o back end para conseguir integrar com o banco de dados:

```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/book
spring.datasource.username=postgres
spring.datasource.password=password
```

Crie o banco de dados e a tabela com as seguintes Querys:

```Query
CREATE DATABASE book;
```

```Query
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255)
);
```

Por fim, para executar o projeto basta rodar o seguinte:

```bash
npm run dev
```

---

## 🦾Colaboradores:
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/rvictorio">
        <img src="https://avatars.githubusercontent.com/rvictorio" width="100px;" alt="Foto de Rafael Victorio no GitHub"/><br>
        <sub>
          <b>Rafael</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

---

## 🧑‍💻Minhas Redes

GitHub: [@Rvictorio](https://github.com/rvictorio) &nbsp;&middot;&nbsp;

LinkedIn: [@Rvictorio](https://www.linkedin.com/in/rvictorio/) &nbsp;&middot;&nbsp;
