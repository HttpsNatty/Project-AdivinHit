# AdivinHit

## Descrição / Description

**Português:**  
AdivinHit é uma aplicação web para quiz musical que carrega dados de uma planilha do Google Sheets e desafia os usuários a responderem perguntas baseadas em músicas e artistas. A aplicação filtra as músicas por gênero, garante que cada pergunta seja única durante a partida e apresenta um resumo final com o total de acertos e um histórico de respostas.

**English:**  
AdivinHit is a web-based musical quiz that loads data from a Google Sheets spreadsheet and challenges users to answer questions based on songs and artists. The application filters songs by genre, ensures each question is unique during the game session, and displays a final summary with the total correct answers along with a history of responses.

## Funcionalidades / Features

**Português:**  
- **Carregamento Dinâmico:** Os dados (Artista, Música e Gênero) são carregados de uma planilha do Google Sheets.  
- **Filtragem por Gênero:** Permite escolher o gênero musical desejado para o quiz.  
- **Perguntas Sem Repetição:** Cada música é exibida apenas uma vez durante a partida.  
- **Cronômetro:** Define a duração da partida com base no tempo configurado.  
- **Histórico de Respostas:** Ao final, exibe o total de músicas apresentadas, o número de acertos e um histórico (sem marcadores).  
- **Interface Moderna:** Desenvolvido com HTML, CSS e JavaScript, com um design responsivo e atraente.

**English:**  
- **Dynamic Data Loading:** Data (Artist, Song, and Genre) is loaded from a Google Sheets spreadsheet.  
- **Genre Filtering:** Allows the user to select the desired music genre for the quiz.  
- **Unique Questions:** Each song is displayed only once during the game session.  
- **Timer:** Sets the game duration based on the configured time.  
- **Response History:** At the end, displays the total number of songs shown, the number of correct answers, and a bullet-free history of responses.  
- **Modern Interface:** Developed using HTML, CSS, and JavaScript, featuring a responsive and attractive design.

## Como Jogar / How to Play

**Português:**  
AdivinHit oferece duas maneiras de jogar, permitindo que você escolha o estilo que mais combina com seu grupo:

1. **Modo Cantarella:**  
   O cantor apresenta a melodia da música **sem** cantar a letra (por exemplo, cantarolando ou utilizando “nanana”). Os demais jogadores tentam adivinhar qual é a música. Você pode **pular** para a próxima música ou marcar a resposta como **correta** para pontuar.

2. **Modo Desafio em Dupla:**  
   Uma pessoa não vê a tela e, portanto, não sabe qual música está sendo exibida. Enquanto isso, os outros jogadores se revezam para cantar a música apresentada. Se a pessoa que não vê adivinhar corretamente, ela pontua. Assim como no modo anterior, há a opção de **pular** ou marcar como **correta**.

**English:**  
AdivinHit offers two ways to play, allowing you to choose the style that best suits your group:

1. **Cantarella Mode:**  
   In this mode, the singer presents the melody of the song **without** singing the lyrics (e.g., humming or using “nanana”). The other players try to guess which song is being represented. You can choose to **skip** to the next song or mark the answer as **correct** to score a point.

2. **Duet Challenge Mode:**  
   In this mode, one person does not see the screen and therefore does not know which song is being displayed. Meanwhile, the other players take turns singing the presented song. If the person who isn’t seeing guesses correctly, they score a point. Just like in the previous mode, you can either **skip** the song or mark it as **correct**.

## Estrutura do Projeto / Project Structure

**Português:**  
- **index.html:** Estrutura e interface do usuário.  
- **styles.css:** Estilos e layout da aplicação.  
- **script.js:** Lógica do quiz, incluindo carregamento de dados, cronômetro, seleção de perguntas e exibição do resumo.

**English:**  
- **index.html:** Contains the structure and user interface.  
- **styles.css:** Contains the styles and layout of the application.  
- **script.js:** Contains the quiz logic, including data loading, timer functionality, question selection, and summary display.

## Configuração da Planilha / Spreadsheet Configuration

**Português:**  
A planilha do Google Sheets deve conter as seguintes colunas:  
- **Coluna A:** Artista  
- **Coluna B:** Música  
- **Coluna C:** Gênero  

A primeira linha deve conter os cabeçalhos, e os dados reais começam na segunda linha.

**English:**  
The Google Sheets spreadsheet should include the following columns:  
- **Column A:** Artist  
- **Column B:** Song  
- **Column C:** Genre  

The first row should contain the headers, and the actual data starts from the second row.

## Personalização / Customization

**Português:**  
- **Tempo de Jogo:** O jogo dura 30 segundos por rodada por padrão.  
- **Estilo e Gênero:** A lista de gêneros é gerada dinamicamente com base na planilha.  
- **Design:** Customize a aparência da aplicação modificando o arquivo `styles.css`.

**English:**  
- **Game Duration:** The game lasts 30 seconds per round by default.  
- **Style and Genre:** The list of genres is generated dynamically based on the spreadsheet data.  
- **Design:** Customize the appearance of the application by modifying the `styles.css` file.