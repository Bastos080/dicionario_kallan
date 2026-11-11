document.addEventListener('DOMContentLoaded', () => {
    const databaseSchema = [
        {
            name: "categoria",
            desc: "Armazena as categorias para classificação dos produtos no catálogo.",
            columns: [
                { col: "id_categoria", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Entrada Manual / Gestão", rbac: "Gerente / Admin" },
                { col: "nome", type: "VARCHAR(45)", key: "UQ", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Entrada Manual / Gestão", rbac: "Gerente / Admin" },
                { col: "descricao", type: "TEXT", key: "-", null: "NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Entrada Manual / Gestão", rbac: "Gerente / Admin" },
                { col: "ativo", type: "TINYINT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Gerente / Admin" }
            ]
        },
        {
            name: "cliente",
            desc: "Armazena os cadastros dos clientes, dados de contato e controle de ativação[cite: 25].",
            columns: [
                { col: "id_cliente", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema (Auto-incremento)", rbac: "Atendente / Gerente" },
                { col: "nome_completo", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "cpf_cnpj", type: "VARCHAR(45)", key: "UQ", null: "NULL", lgpd: "<span class='tag-lgpd'>[DPS]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "telefone", type: "VARCHAR(45)", key: "-", null: "NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "email", type: "VARCHAR(45)", key: "-", null: "NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "ativo", type: "TINYINT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Atendente / Gerente" },
                { col: "data_hora_criacao", type: "DATETIME", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Servidor (TIMESTAMP)", rbac: "Atendente / Gerente" }
            ]
        },
        {
            name: "forma_pagamento",
            desc: "Cadastra as formas e meios de pagamento aceitos nas transações.",
            columns: [
                { col: "id_forma_pagamento", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Gerente / Admin" },
                { col: "codigo", type: "VARCHAR(45)", key: "UQ", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Configuração do Sistema", rbac: "Gerente / Admin" },
                { col: "descricao", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Configuração do Sistema", rbac: "Gerente / Admin" },
                { col: "ativo", type: "TINYINT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Configuração do Sistema", rbac: "Gerente / Admin" }
            ]
        },
        {
            name: "usuario",
            desc: "Controla os operadores, gerentes e administradores do sistema (RBAC)[cite: 27].",
            columns: [
                { col: "id_usuario", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Admin" },
                { col: "nome_completo", type: "VARCHAR(45)", key: "-", null: "NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Painel Administrativo", rbac: "Admin" },
                { col: "login", type: "VARCHAR(45)", key: "UQ", null: "NOT NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Painel Administrativo", rbac: "Admin" },
                { col: "senha_hash", type: "VARCHAR(255)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-lgpd'>[DPS]</span>", lineage: "Painel Administrativo (Hash)", rbac: "Sistema / Admin" },
                { col: "perfil", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Painel Administrativo", rbac: "Admin" },
                { col: "ativo", type: "TINYINT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Painel Administrativo", rbac: "Admin" },
                { col: "data_hora_criacao", type: "DATETIME", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Servidor", rbac: "Admin" }
            ]
        },
        {
            name: "endereco",
            desc: "Armazena os endereços associados aos clientes cadastrados[cite: 30].",
            columns: [
                { col: "id_endereco", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Atendente / Gerente" },
                { col: "id_cliente", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela cliente (id_cliente)", rbac: "Atendente / Gerente" },
                { col: "logradouro", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "numero", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "complemento", type: "VARCHAR(45)", key: "-", null: "NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "bairro", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "cep", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "cidade", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "uf", type: "CHAR(2)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Cadastro de Cliente", rbac: "Atendente / Gerente" },
                { col: "ativo", type: "TINYINT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Atendente / Gerente" }
            ]
        },
        {
            name: "produto",
            desc: "Cadastro geral dos produtos vinculados às categorias[cite: 30].",
            columns: [
                { col: "id_produto", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Gerente / Admin" },
                { col: "id_categoria", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela categoria (id_categoria)", rbac: "Gerente / Admin" },
                { col: "descricao", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Gestão de Catálogo", rbac: "Gerente / Admin" },
                { col: "marca", type: "VARCHAR(45)", key: "-", null: "NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Gestão de Catálogo", rbac: "Gerente / Admin" },
                { col: "ativo", type: "TINYINT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Gestão de Catálogo", rbac: "Gerente / Admin" }
            ]
        },
        {
            name: "variacao_produto",
            desc: "Gerencia SKU, tamanho, cor, preço de tabela e saldo em estoque[cite: 30].",
            columns: [
                { col: "id_variacao_produto", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Atendente / Gerente" },
                { col: "id_produto", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela produto (id_produto)", rbac: "Atendente / Gerente" },
                { col: "sku", type: "VARCHAR(45)", key: "UQ", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Geração Automática / Catálogo", rbac: "Atendente / Gerente" },
                { col: "tamanho", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Gestão de Estoque", rbac: "Atendente / Gerente" },
                { col: "cor", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Gestão de Estoque", rbac: "Atendente / Gerente" },
                { col: "preco_tabela", type: "DECIMAL(10,2)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Gestão de Preços", rbac: "Gerente / Admin" },
                { col: "saldo_estoque", type: "INT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Movimentação de Estoque", rbac: "Atendente / Gerente" },
                { col: "ativo", type: "TINYINT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Atendente / Gerente" }
            ]
        },
        {
            name: "venda",
            desc: "Armazena o cabeçalho das transações de venda realizadas[cite: 30].",
            columns: [
                { col: "id_venda", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Atendente / Gerente" },
                { col: "id_cliente", type: "BIGINT", key: "FK", null: "NULL", lgpd: "<span class='tag-dp'>[DP]</span>", lineage: "Tabela cliente (id_cliente)", rbac: "Atendente / Gerente" },
                { col: "id_usuario", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela usuario (id_usuario)", rbac: "Atendente / Gerente" },
                { col: "id_forma_pagamento", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela forma_pagamento", rbac: "Atendente / Gerente" },
                { col: "data_hora_venda", type: "DATETIME", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Servidor", rbac: "Atendente / Gerente" },
                { col: "modalidade_compra", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "PDV / E-commerce", rbac: "Atendente / Gerente" },
                { col: "situacao", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Máquina de Estados de Venda", rbac: "Atendente / Gerente" },
                { col: "valor_bruto", type: "DECIMAL(12,2)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Cálculo de Itens", rbac: "Atendente / Gerente" },
                { col: "valor_desconto", type: "DECIMAL(12,2)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Aplicação de Desconto", rbac: "Atendente / Gerente" },
                { col: "valor_total", type: "DECIMAL(12,2)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Cálculo Final da Transação", rbac: "Atendente / Gerente" },
                { col: "data_cancelamento", type: "DATETIME", key: "-", null: "NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Processo de Estorno/Cancelamento", rbac: "Gerente / Admin" }
            ]
        },
        {
            name: "item_venda",
            desc: "Registra os itens individuais comercializados em cada venda[cite: 30].",
            columns: [
                { col: "id_item_venda", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Atendente / Gerente" },
                { col: "id_venda", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela venda (id_venda)", rbac: "Atendente / Gerente" },
                { col: "id_variacao_produto", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela variacao_produto", rbac: "Atendente / Gerente" },
                { col: "quantidade", type: "INT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "PDV / Carrinho", rbac: "Atendente / Gerente" },
                { col: "preco_unitario_venda", type: "DECIMAL(10,2)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Histórico de Preço da Variação", rbac: "Atendente / Gerente" },
                { col: "desconto_item", type: "DECIMAL(10,2)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "PDV / Carrinho", rbac: "Atendente / Gerente" }
            ]
        },
        {
            name: "movimentacao_estoque",
            desc: "Registra todas as entradas, saídas, baixas de vendas e ajustes de estoque[cite: 30].",
            columns: [
                { col: "id_movimentacao_estoque", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema", rbac: "Gerente / Admin" },
                { col: "id_variacao_produto", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela variacao_produto", rbac: "Gerente / Admin" },
                { col: "id_usuario", type: "BIGINT", key: "FK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela usuario (id_usuario)", rbac: "Gerente / Admin" },
                { col: "id_venda", type: "BIGINT", key: "FK", null: "NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela venda (id_venda)", rbac: "Gerente / Admin" },
                { col: "id_estorno", type: "BIGINT", key: "FK", null: "NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela estorno", rbac: "Gerente / Admin" },
                { col: "tipo", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Rotina de Estoque", rbac: "Gerente / Admin" },
                { col: "quantidade", type: "INT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Rotina de Estoque", rbac: "Gerente / Admin" },
                { col: "data_hora_movimentacao", type: "DATETIME", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Servidor", rbac: "Gerente / Admin" },
                { col: "motivo", type: "TEXT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Entrada Manual / Sistema", rbac: "Gerente / Admin" }
            ]
        },
        {
            name: "log_auditoria",
            desc: "Trilha de auditoria append-only para registro de operações sensíveis (COBIT/LGPD)[cite: 30].",
            columns: [
                { col: "id_log_auditoria", type: "BIGINT", key: "PK", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Sistema (Triggers / App)", rbac: "Admin" },
                { col: "id_usuario", type: "BIGINT", key: "FK", null: "NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Tabela usuario (id_usuario)", rbac: "Admin" },
                { col: "tabela_afetada", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Auditoria Interna", rbac: "Admin" },
                { col: "id_registro_afetado", type: "BIGINT", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Auditoria Interna", rbac: "Admin" },
                { col: "operacao", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Auditoria Interna", rbac: "Admin" },
                { col: "data_hora_registro", type: "DATETIME", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Servidor", rbac: "Admin" },
                { col: "valor_anterior", type: "JSON", key: "-", null: "NULL", lgpd: "<span class='tag-dp'>[DP/DPS]</span>", lineage: "Captura de Estado Anterior", rbac: "Admin" },
                { col: "valor_novo", type: "JSON", key: "-", null: "NULL", lgpd: "<span class='tag-dp'>[DP/DPS]</span>", lineage: "Captura de Novo Estado", rbac: "Admin" },
                { col: "id_correlacao", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Middleware / App", rbac: "Admin" },
                { col: "resultado", type: "VARCHAR(45)", key: "-", null: "NOT NULL", lgpd: "<span class='tag-na'>[N/A]</span>", lineage: "Trilha Transacional", rbac: "Admin" }
            ]
        }
    ];

    const container = document.getElementById('tables-container');

    databaseSchema.forEach(table => {
        const card = document.createElement('div');
        card.className = 'table-card';
        card.setAttribute('data-table-name', table.name);

        let rowsHtml = table.columns.map(c => {
            let keyBadge = '';
            if (c.key === 'PK') keyBadge = '<span class="pk">PK</span>';
            else if (c.key === 'UQ') keyBadge = '<span class="uq">UQ</span>';
            else if (c.key === 'FK') keyBadge = '<span class="pk" style="background-color:#0284c7">FK</span>';
            else keyBadge = '-';

            return `
                <tr>
                    <td><code>${c.col}</code></td>
                    <td>${c.desc}</td>
                    <td><code>${c.type}</code></td>
                    <td><b>${keyBadge}</b></td>
                    <td>${c.lgpd}</td>
                    <td>${c.lineage}</td>
                    <td>${c.rbac}</td>
                </tr>
            `;
        }).join('');

        card.innerHTML = `
            <div class="table-header">
                <h3><i class="fa-solid fa-table"></i> ${table.name}</h3>
                <span class="badge-engine">InnoDB</span>
            </div>
            <p class="table-desc">${table.desc}</p>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Descrição / Regra de Negócio</th>
                            <th>Tipo e Tamanho</th>
                            <th>Constraints</th>
                            <th>Privacidade (LGPD)</th>
                            <th>Linhagem (Lineage)</th>
                            <th>Acesso (RBAC)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
            </div>
        `;
        container.appendChild(card);
    });

    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const tableCards = document.querySelectorAll('.table-card');

        tableCards.forEach(card => {
            const tableName = card.getAttribute('data-table-name').toLowerCase();
            if (term === '' || tableName.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    const downloadBtn = document.getElementById('download-doc-btn');
    downloadBtn.addEventListener('click', () => {
        const pdfPath = 'docs/Especificacao_Requisitos_Regras_Negocio_Kallan_no_Molde.pdf';
        
        fetch(pdfPath, { method: 'HEAD' })
            .then(res => {
                if (res.ok) {
                    window.open(pdfPath, '_blank');
                } else {
                    generateTextFallback();
                }
            })
            .catch(() => {
                generateTextFallback();
            });
    });

    function generateTextFallback() {
        const content = `
================================================================================
DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS E REGRAS DE NEGÓCIO - KALLAN CALÇADOS
================================================================================
Projeto: Sistema de Gestão Operacional e Vendas
Instituição: UNICID - Análise e Desenvolvimento de Sistemas
Grupo: 5 | Professor: Dr. Diego Marques de Carvalho[cite: 22, 33]

1. VISÃO GERAL DO ESCOPO
--------------------------------------------------------------------------------
Solução acadêmica voltada ao controle de clientes, catálogo de calçados, variações 
de tamanho e cor, estoque e vendas transacionais.

2. REQUISITOS FUNCIONAIS (RF)
- RF01: Cadastro de Clientes (Atendente / Gerente)[cite: 25]
- RF02: Registro e Finalização de Venda com transações atômicas[cite: 26]
- RF03: Gestão do Catálogo e Estoque (Gerente / Administrador)[cite: 26]
- RF04: Consulta do Histórico de Vendas[cite: 26]

3. REQUISITOS NÃO FUNCIONAIS (RNF)
- RNF01: Segurança e controle de acesso baseado em perfis (RBAC)[cite: 27]
- RNF05: Integridade transacional estipulada pelas propriedades ACID[cite: 27]
- RNF07: Utilização de SGBD relacional MySQL com codificação UTF-8[cite: 27]
================================================================================
        `;

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Especificacao_Requisitos_Kallan_Calcados.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    const modal = document.getElementById('der-modal');
    const openBtn = document.getElementById('open-der-modal');
    const closeBtn = document.getElementById('close-modal');
    const derImage = document.getElementById('der-image');
    
    let panzoomInstance = null;

    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        if (!panzoomInstance) {
            panzoomInstance = Panzoom(derImage, {
                maxScale: 6,
                minScale: 0.2,
                contain: false
            });
            derImage.parentElement.addEventListener('wheel', panzoomInstance.zoomWithWheel);
        }
        setTimeout(() => {
            panzoomInstance.reset();
        }, 50);
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('zoom-in').addEventListener('click', () => {
        if (panzoomInstance) panzoomInstance.zoomIn();
    });

    document.getElementById('zoom-out').addEventListener('click', () => {
        if (panzoomInstance) panzoomInstance.zoomOut();
    });

    document.getElementById('reset-zoom').addEventListener('click', () => {
        if (panzoomInstance) panzoomInstance.reset();
    });
});