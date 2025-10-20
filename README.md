# Site Advocacia - Luciana da Veiga Cascaes

Site institucional para escritório de advocacia especializado em Direito das Famílias e Sucessões.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Componentes do Sistema](#componentes-do-sistema)
- [Gerenciamento de Imagens](#gerenciamento-de-imagens)
- [Banco de Dados](#banco-de-dados)
- [Manutenção](#manutenção)

## 🎯 Sobre o Projeto

Site profissional desenvolvido com React, TypeScript e Tailwind CSS, focado em apresentar os serviços de advocacia com design elegante e funcionalidades modernas. O site inclui:

- Apresentação profissional com carrossel de imagens
- Seções sobre serviços, depoimentos e contato
- Integração com Instagram
- Formulário de contato com banco de dados Supabase
- Design responsivo para todos os dispositivos

## 📁 Estrutura do Projeto

```
project/
├── src/                          # Código-fonte principal
│   ├── assets/                   # Recursos estáticos
│   │   └── images/              # Imagens do site
│   │       ├── logos/           # Logotipos da marca
│   │       │   ├── brand-title.png  # Logo principal (cabeçalho)
│   │       │   └── logo-lc.png      # Logo secundário (rodapé)
│   │       └── instagram/       # Imagens do Instagram
│   │           ├── div1.JPG     # Primeira imagem da galeria
│   │           └── div2.JPG     # Segunda imagem da galeria
│   │
│   ├── components/              # Componentes React
│   │   ├── Hero.tsx            # Seção principal com logo e CTA
│   │   ├── About.tsx           # Seção "Sobre"
│   │   ├── Services.tsx        # Áreas de atuação
│   │   ├── Testimonials.tsx    # Depoimentos de clientes
│   │   ├── Instagram.tsx       # Integração com Instagram
│   │   ├── Contact.tsx         # Formulário de contato
│   │   └── Footer.tsx          # Rodapé do site
│   │
│   ├── lib/                    # Bibliotecas e configurações
│   │   └── supabase.ts        # Cliente Supabase
│   │
│   ├── App.tsx                # Componente principal
│   ├── main.tsx              # Ponto de entrada da aplicação
│   └── index.css             # Estilos globais
│
├── supabase/                  # Configurações do banco de dados
│   └── migrations/           # Migrações do banco
│       └── 20251017134059_create_contact_submissions_table.sql
│
├── public/                   # Arquivos públicos
├── .env                     # Variáveis de ambiente
├── package.json            # Dependências do projeto
├── tsconfig.json          # Configuração TypeScript
├── tailwind.config.js    # Configuração Tailwind CSS
├── vite.config.ts       # Configuração Vite
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.5.3** - Superset do JavaScript com tipagem estática
- **Vite 5.4.2** - Build tool moderna e rápida
- **Tailwind CSS 3.4.1** - Framework CSS utility-first

### Bibliotecas
- **Lucide React 0.344.0** - Biblioteca de ícones
- **Supabase JS 2.57.4** - Cliente para banco de dados e autenticação

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processador de CSS
- **Autoprefixer** - Adiciona prefixos CSS automaticamente

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos para instalação

1. **Clone o repositório** (se aplicável):
```bash
git clone [url-do-repositorio]
cd project
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure as variáveis de ambiente**:
Edite o arquivo `.env` na raiz do projeto com suas credenciais do Supabase:
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. **Execute o projeto em desenvolvimento**:
```bash
npm run dev
```

5. **Acesse o site**:
Abra seu navegador em `http://localhost:5173`

### Comandos Disponíveis

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Gera build de produção
npm run preview    # Visualiza build de produção localmente
npm run lint       # Verifica erros de código
npm run typecheck  # Verifica erros de TypeScript
```

## 🧩 Componentes do Sistema

### 1. Hero (src/components/Hero.tsx)
**Responsabilidade**: Seção principal do site com apresentação visual impactante

**Funcionalidades**:
- Exibe o logo principal (brand-title.png) no cabeçalho
- Carrossel automático de imagens de fundo
- Botões de ação (WhatsApp e Instagram)
- Informações profissionais (OAB, @jurisfeministas)

**Principais elementos**:
```typescript
// Importação do logo principal
import brandTitle from '../assets/images/logos/brand-title.png';

// Imagens do carrossel (transição a cada 5 segundos)
const heroImages = [
  'url-imagem-1',
  'url-imagem-2',
  'url-imagem-3',
];

// Hook para gerenciar transição de imagens
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

### 2. About (src/components/About.tsx)
**Responsabilidade**: Apresenta informações sobre a advogada

**Conteúdo**:
- Biografia profissional
- Formação e experiência
- Abordagem humanizada

### 3. Services (src/components/Services.tsx)
**Responsabilidade**: Lista as áreas de atuação

**Áreas cobertas**:
- Divórcio e Separação
- Pensão Alimentícia
- Guarda de Filhos
- Inventário e Sucessões
- União Estável
- Planejamento Sucessório

### 4. Testimonials (src/components/Testimonials.tsx)
**Responsabilidade**: Exibe depoimentos de clientes

**Características**:
- Card design elegante
- Ícones de estrelas para avaliação
- Layout responsivo

### 5. Instagram (src/components/Instagram.tsx)
**Responsabilidade**: Galeria de posts do Instagram

**Funcionalidades**:
- Exibe 4 imagens em grid responsivo
- As duas primeiras usam imagens locais (div1.JPG e div2.JPG)
- Link direto para perfil do Instagram
- Hover effects nas imagens

**Estrutura de dados**:
```typescript
// Importação de imagens locais
import div1 from '../assets/images/instagram/div1.JPG';
import div2 from '../assets/images/instagram/div2.JPG';

// Array de posts
const instagramPosts = [
  { image: div1, caption: 'Descrição 1' },
  { image: div2, caption: 'Descrição 2' },
  { image: 'url-externa-3', caption: 'Descrição 3' },
  { image: 'url-externa-4', caption: 'Descrição 4' },
];
```

### 6. Contact (src/components/Contact.tsx)
**Responsabilidade**: Formulário de contato com integração ao banco de dados

**Campos do formulário**:
- Nome completo
- Email
- Telefone
- Mensagem

**Funcionalidade de envio**:
```typescript
// Função de submissão que salva no Supabase
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validação de campos
  if (!formData.name || !formData.email || !formData.message) {
    setSubmitStatus({ type: 'error', message: 'Preencha todos os campos obrigatórios' });
    return;
  }

  // Inserção no banco de dados
  const { error } = await supabase
    .from('contact_submissions')
    .insert([formData]);

  if (error) {
    setSubmitStatus({ type: 'error', message: 'Erro ao enviar mensagem' });
  } else {
    setSubmitStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
    // Limpa formulário
  }
};
```

### 7. Footer (src/components/Footer.tsx)
**Responsabilidade**: Rodapé do site com navegação e informações

**Elementos principais**:
- Logo secundário (logo-lc.png) clicável que volta ao topo
- Links de navegação
- Informações de contato
- Links para redes sociais
- Copyright

**Funcionalidade de scroll**:
```typescript
// Função para voltar ao topo da página
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Função para navegar entre seções
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
```

## 🖼️ Gerenciamento de Imagens

### Estrutura de Pastas de Imagens

```
src/assets/images/
├── logos/              # Logotipos da marca
│   ├── brand-title.png # Logo principal usado no Hero
│   └── logo-lc.png     # Logo usado no Footer
└── instagram/          # Imagens da seção Instagram
    ├── div1.JPG        # Primeira imagem da galeria
    └── div2.JPG        # Segunda imagem da galeria
```

### Como Atualizar Imagens

#### 1. Logos (brand-title.png e logo-lc.png)

**Para substituir o logo principal (cabeçalho)**:
1. Substitua o arquivo `src/assets/images/logos/brand-title.png`
2. Mantenha o mesmo nome ou atualize a importação em `Hero.tsx`:
```typescript
import brandTitle from '../assets/images/logos/brand-title.png';
```

**Para substituir o logo do rodapé**:
1. Substitua o arquivo `src/assets/images/logos/logo-lc.png`
2. Mantenha o mesmo nome ou atualize a importação em `Footer.tsx`:
```typescript
import logoLc from '../assets/images/logos/logo-lc.png';
```

#### 2. Imagens do Instagram (div1.JPG e div2.JPG)

**Para adicionar ou substituir imagens da galeria**:
1. Adicione as imagens na pasta `src/assets/images/instagram/`
2. Atualize as importações em `Instagram.tsx`:
```typescript
import div1 from '../assets/images/instagram/div1.JPG';
import div2 from '../assets/images/instagram/div2.JPG';
```
3. Atualize o array `instagramPosts` com as novas imagens

**Para adicionar mais imagens (div3.JPG, div4.JPG)**:
1. Adicione os arquivos na pasta `instagram/`
2. Importe-os no componente:
```typescript
import div3 from '../assets/images/instagram/div3.JPG';
import div4 from '../assets/images/instagram/div4.JPG';
```
3. Atualize o array:
```typescript
const instagramPosts = [
  { image: div1, caption: 'Dicas sobre direito de família' },
  { image: div2, caption: 'Planejamento sucessório' },
  { image: div3, caption: 'Orientação jurídica' },
  { image: div4, caption: 'Casos de sucesso' },
];
```

### Formatos de Imagens Recomendados

- **Logos**: PNG com fundo transparente
  - brand-title.png: largura recomendada 800-1200px
  - logo-lc.png: altura recomendada 100-150px

- **Instagram**: JPG ou PNG
  - Formato quadrado (1:1)
  - Resolução mínima: 600x600px
  - Tamanho máximo: 2MB por imagem

## 💾 Banco de Dados

### Configuração do Supabase

O projeto utiliza Supabase como backend-as-a-service para armazenar submissões do formulário de contato.

**Tabela: contact_submissions**

```sql
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

### Estrutura da Tabela

| Campo      | Tipo        | Descrição                    |
|------------|-------------|------------------------------|
| id         | uuid        | Identificador único          |
| name       | text        | Nome do contato              |
| email      | text        | Email do contato             |
| phone      | text        | Telefone (opcional)          |
| message    | text        | Mensagem enviada             |
| created_at | timestamptz | Data/hora da submissão       |

### Cliente Supabase (src/lib/supabase.ts)

```typescript
import { createClient } from '@supabase/supabase-js';

// Configuração do cliente usando variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Como Acessar os Dados

1. **Via Painel do Supabase**:
   - Acesse https://supabase.com
   - Faça login na sua conta
   - Selecione seu projeto
   - Vá para "Table Editor"
   - Selecione a tabela "contact_submissions"

2. **Via SQL**:
```sql
-- Listar todas as submissões
SELECT * FROM contact_submissions ORDER BY created_at DESC;

-- Listar submissões recentes
SELECT * FROM contact_submissions
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

## 🔧 Manutenção

### Atualização de Conteúdo

#### Informações da Advogada
Edite `src/components/Hero.tsx` para atualizar:
- Número OAB
- Links do Instagram
- Texto de apresentação

#### Áreas de Atuação
Edite `src/components/Services.tsx` para:
- Adicionar novos serviços
- Modificar descrições
- Atualizar ícones

#### Depoimentos
Edite `src/components/Testimonials.tsx` para:
- Adicionar novos depoimentos
- Atualizar textos existentes
- Modificar avaliações

### Atualização de Estilos

O projeto usa Tailwind CSS. Para personalizar:

1. **Cores e tema**: Edite `tailwind.config.js`
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        darker: '#1a1a2e',
      },
      gold: {
        400: '#d4af37',
      },
      // Adicione suas cores
    },
  },
}
```

2. **Estilos globais**: Edite `src/index.css`

### Backup e Segurança

1. **Backup do Banco de Dados**:
   - Use o painel do Supabase para criar backups automáticos
   - Exporte dados regularmente

2. **Variáveis de Ambiente**:
   - NUNCA commite o arquivo `.env` no Git
   - Mantenha cópias seguras das credenciais
   - Use variáveis de ambiente diferentes para produção

3. **Código Fonte**:
   - Mantenha o projeto em um repositório Git
   - Faça commits regulares
   - Use branches para novas features

### Troubleshooting

**Problema: Imagens não aparecem**
- Verifique se os arquivos estão na pasta correta
- Confirme que as importações estão corretas
- Limpe o cache do navegador

**Problema: Formulário não envia**
- Verifique as credenciais do Supabase no `.env`
- Confirme que a tabela existe no banco
- Verifique o console do navegador para erros

**Problema: Build falha**
- Execute `npm install` novamente
- Verifique se todas as importações estão corretas
- Execute `npm run typecheck` para ver erros TypeScript

## 📞 Suporte

Para dúvidas sobre o projeto, entre em contato através do formulário do site ou dos canais de comunicação disponíveis.

---

**Desenvolvido com atenção aos detalhes e foco na experiência do usuário.**
