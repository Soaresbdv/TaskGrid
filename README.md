# TaskGrid 📋

![TaskGrid Preview](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Tech Stack](https://img.shields.io/badge/stack-Flask%20%2B%20React%20%2B%20Vite-blue)

Um sistema de gerenciamento de tarefas moderno, escalável e modularizado, perfeito para seu portfólio.

## ✨ Funcionalidades
- [x] Autenticação JWT
- [x] CRUD de tarefas
- [x] Filtros e buscas
- [ ] Dashboard com gráficos (em breve)

## 🛠️ Tecnologias
- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Flask (Python) + SQLAlchemy
- **API**: RESTful com documentação Swagger

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- Python 3.10+
- PostgreSQL (opcional)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Soaresbdv/TaskGrid.git
cd TaskGrid

# Frontend
cd frontend
npm install
npm run dev

# Backend (em outro terminal)
cd ../backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# OU
venv\Scripts\activate    # Windows
pip install -r requirements.txt
flask run
```

## 📦 Estrutura do Projeto
```
TaskGrid/
├── backend/          # API Flask
│   ├── app/          # Módulos Blueprint
│   └── tests/
├── frontend/         # Aplicação React
│   ├── src/
│   │   ├── api/      # Serviços de API
│   │   └── pages/    # Rotas
└── docs/             # Documentação
```

## 🤝 Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request
