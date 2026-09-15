# Portfólio — Carlos Vinicius

Portfólio profissional em HTML5 + Bootstrap 5, desenvolvido a partir do
planejamento em `Bootstrap_Editado.docx`.

## Estrutura do projeto

```
portfolio/
├── index.html          → toda a estrutura/conteúdo do site
├── css/
│   └── style.css        → identidade visual (cores, tipografia, componentes)
├── js/
│   └── script.js         → ano automático no rodapé, menu mobile, destaque do menu ativo
├── img/                  → screenshots dos projetos
└── README.md
```

## Identidade visual

- **Cor principal:** azul-marinho (`#1B365D` / `#0B1626`)
- **Cor secundária:** branco / gelo (`#F3F6FA`)
- **Cor de destaque:** dourado (`#C5A059`)
- **Tipografia de títulos:** Space Grotesk
- **Tipografia de texto:** IBM Plex Sans

## Seções (na ordem em que aparecem)

1. **Hero** — apresentação principal e chamadas para ação
2. **Sobre mim** — trajetória e objetivo profissional
3. **Competências** — agrupadas em Suporte & Infraestrutura, Desenvolvimento e Perfil
4. **Projetos** — Gerenciador Financeiro, Conversor de Moedas, Mini Jogo do Mario (cada um com carrossel de imagens)
5. **Formação e experiências** — linha do tempo
6. **Contato** — e-mail, LinkedIn e GitHub

## Como visualizar

Basta abrir `index.html` no navegador. Não é necessário nenhum servidor
ou instalação — o Bootstrap e os ícones são carregados via CDN.

## Antes de publicar

- [ ] **Foto de perfil:** o hero está usando um cartão estilo "terminal" no
      lugar da foto (a foto profissional citada no planejamento ainda não
      foi enviada). Para trocar: adicione a imagem em `img/foto-perfil.jpg`
      e substitua o bloco `.id-card` em `index.html` por uma tag `<img>` —
      posso fazer essa troca a qualquer momento se você enviar a foto.
- [ ] Conferir se os links de GitHub/projetos ainda estão corretos.
- [ ] Revisar o texto de apresentação, se quiser ajustar o tom.
