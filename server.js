// Importando os módulos http, fs e path do Node.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// Criando um servidor HTTP usando a função createServer
const server = http.createServer((req, res) => {
    // Roteamento de URLs
    // Verifica se a URL é '/' (raiz), se sim, define o filePath como 'base.html', senão, remove o '/' inicial
    const filePath = req.url === '/' ? 'base.html' : req.url.substring(1);
    
    // Obtendo a extensão do arquivo solicitado
    const extname = path.extname(filePath);
    let contentType = 'text/html'; // Define o tipo de conteúdo padrão como HTML

    // Verifica a extensão do arquivo para definir o tipo de conteúdo apropriado
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'; // Se a extensão for '.js', define o tipo de conteúdo como JavaScript
            break;
        default:
            contentType = 'text/html'; // Para qualquer outra extensão, o tipo de conteúdo padrão é HTML
    }

    // Lendo o arquivo solicitado
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Se o arquivo não for encontrado, retorna um erro 404
                fs.readFile('404.html', (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // Se ocorrer outro erro, retorna um erro interno do servidor
                res.writeHead(500);
                res.end(`Erro interno do servidor: ${err.code}`);
            }
        } else {
            // Se o arquivo for encontrado, retorna o conteúdo com o tipo de conteúdo adequado
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

// Define a porta em que o servidor irá escutar, utilizando a variável de ambiente PORT ou a porta 3000 por padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor, ouvindo na porta especificada
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
