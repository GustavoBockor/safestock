
import { Epi } from "../model/Epi.js";

import {
    cadastrarEpi,
    listarEpis,
    buscarEpiPorIndice,
    atualizarEpi,
    excluirEpi
} from "../repository/epiRepository.js";

export function cadastrar(codigo, nome, ca, quantidade) {
    const epi = new Epi(codigo, nome, ca, quantidade);
    cadastrarEpi(epi);
    console.log("EPI cadastrado com sucesso!");
}

export function listar() {
    const epis = listarEpis();

    console.log("\nLista de EPIs:");

    for (let i = 0; i < epis.length; i++) {
        console.log(
            `Índice: ${i} | Código: ${epis[i].codigo} | Nome: ${epis[i].nome} | CA: ${epis[i].ca} | Quantidade: ${epis[i].quantidade}`
        );
    }
}

export function buscar(indice) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado!");
        return;
    }

    console.log(
        `Código: ${epi.codigo} | Nome: ${epi.nome} | CA: ${epi.ca} | Quantidade: ${epi.quantidade}`
    );
}

export function atualizar(indice, codigo, nome, ca, quantidade) {
    if (buscarEpiPorIndice(indice) === undefined) {
        console.log("EPI não encontrado!");
        return;
    }

    const epi = new Epi(codigo, nome, ca, quantidade);
    atualizarEpi(indice, epi);
    console.log("EPI atualizado com sucesso!");
}

export function excluir(indice) {
    if (buscarEpiPorIndice(indice) === undefined) {
        console.log("EPI não encontrado!");
        return;
    }

    excluirEpi(indice);
    console.log("EPI excluído com sucesso!");
}

export function adicionarEstoque(indice, valor) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado!");
        return;
    }

    if (epi.adicionarQuantidade(valor)) {
        console.log("Quantidade adicionada com sucesso!");
    } else {
        console.log("Valor inválido!");
    }
}

export function retirarEstoque(indice, valor) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado!");
        return;
    }

    if (epi.retirarQuantidade(valor)) {
        console.log("Quantidade retirada com sucesso!");
    } else {
        console.log("Quantidade inválida ou estoque insuficiente!");
    }
}