
import {
    cadastrar,
    listar,
    buscar,
    adicionarEstoque,
    retirarEstoque,
    atualizar,
    excluir
} from "./controller/EpiController.js";

console.log("===== SAFESTOCK =====");

cadastrar("EPI001", "Capacete de segurança", "12345", 20);
cadastrar("EPI002", "Luva de proteção", "23456", 50);
cadastrar("EPI003", "Óculos de proteção", "34567", 30);

listar();

console.log("\n===== BUSCAR EPI =====");
buscar(1);

console.log("\n===== ADICIONAR ESTOQUE =====");
adicionarEstoque(0, 10);
listar();

console.log("\n===== RETIRAR ESTOQUE =====");
retirarEstoque(1, 5);
listar();

console.log("\n===== TESTAR ESTOQUE INSUFICIENTE =====");
retirarEstoque(2, 100);

console.log("\n===== ATUALIZAR EPI =====");
atualizar(1, "EPI002", "Luva de proteção química", "23456", 60);
listar();

console.log("\n===== EXCLUIR EPI =====");
excluir(0);

console.log("\n===== LISTA FINAL =====");
listar();