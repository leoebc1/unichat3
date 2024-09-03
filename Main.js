"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rede_1 = require("./Rede");
var readlineSync = require("readline-sync");
console.log("teste");
function main() {
    var redeSocial = new Rede_1.Rede(); // cria nova instância da classe Feed, 
    //que é responsável por gerenciar contas e posts na rede social.
    var contaLogada = null;
    var _loop_1 = function () {
        console.clear();
        console.log("\n         \u2584         \u2584  \u2584\u2584        \u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584         \u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u2591\u258C      \u2590\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C\u2591\u258C     \u2590\u2591\u258C \u2580\u2580\u2580\u2580\u2588\u2591\u2588\u2580\u2580\u2580\u2580 \u2590\u2591\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2588\u2591\u258C \u2580\u2580\u2580\u2580\u2588\u2591\u2588\u2580\u2580\u2580\u2580 \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C\u2590\u2591\u258C    \u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C \u2590\u2591\u258C   \u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2591\u258C\u2590\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C  \u2590\u2591\u258C  \u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C   \u2590\u2591\u258C \u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2588\u2591\u258C\u2590\u2591\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2588\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C    \u2590\u2591\u258C\u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2591\u258C\u2590\u2591\u258C     \u2590\u2591\u2590\u2591\u258C \u2584\u2584\u2584\u2584\u2588\u2591\u2588\u2584\u2584\u2584\u2584 \u2590\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u258C      \u2590\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C     \u2590\u2591\u258C     \n         \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580        \u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580         \u2580  \u2580         \u2580       \u2580      \n                                                                                                   ");
        if (contaLogada) {
            console.log("USERNAME: ".concat(contaLogada.getNomeUsuario(), ". ").concat(contaLogada.getSeguindo()));
        }
        console.log('[01] Criar conta\n[02] Login\n[03] Logout\n[04] Criar post\n[05] Ver feed\n[06] Seguir usuário\n[07] Enviar mensagem\n[08] Ver mensagens\n[00] Sair');
        var escolha = readlineSync.question('Escolha opcao: ');
        switch (escolha) {
            case '01':
                contaLogada = redeSocial.criarConta();
                break;
            case '02':
                contaLogada = redeSocial.login();
                break;
            case '03':
                if (contaLogada) {
                    redeSocial.logout();
                    contaLogada = null;
                }
                else {
                    console.clear();
                    readlineSync.question("Você não está logado. Tecle ENTER para continuar...");
                }
            case '04':
                if (contaLogada) {
                    var conteudo = readlineSync.question('Conteudo do post: ');
                    contaLogada.criarPost(conteudo);
                    console.log('Post criado com sucesso!');
                }
                else {
                    console.log('Você precisa estar logado para criar um post.');
                }
                break;
            case '05':
                if (contaLogada) {
                    for (var _i = 0, _a = redeSocial.contas; _i < _a.length; _i++) {
                        var conta = _a[_i];
                        if (contaLogada.getSeguindo().includes(conta.getId())) {
                            redeSocial.puxarPosts(conta);
                        }
                    }
                }
                else {
                    readlineSync.question('Você precisa estar logado para ver o feed. Tecle ENTER para continuar...');
                }
                break;
            case '06':
                if (contaLogada) {
                    var idParaSeguir_1 = readlineSync.questionInt('ID da conta para seguir: ');
                    var contaParaSeguir = redeSocial.contas.find(function (c) { return c.getId() === idParaSeguir_1; });
                    if (contaParaSeguir) {
                        contaLogada.seguir(contaParaSeguir);
                        console.log("Agora voc\u00EA est\u00E1 seguindo ".concat(contaParaSeguir.getNomeUsuario(), "."));
                    }
                    else {
                        console.log('Conta não encontrada.');
                    }
                }
                else {
                    console.log('Você precisa estar logado para seguir um usuário.');
                }
                break;
            case '07':
                if (contaLogada) {
                    var idDestino_1 = readlineSync.questionInt('ID da conta para enviar mensagem: ');
                    var contaDestino = redeSocial.contas.find(function (c) { return c.getId() === idDestino_1; });
                    if (contaDestino) {
                        var mensagem = readlineSync.question('Mensagem: ');
                        contaLogada.enviarMensagem(contaDestino, mensagem);
                        readlineSync.question("Mensagem enviada com sucesso. Tecle ENTER para continuar...");
                    }
                    else {
                        readlineSync.question("Conta não encontrada. Tecle ENTER para continuar...");
                    }
                }
                else {
                    readlineSync.question("Você precisa estar logado para isso. Tecle ENTER para continuar...");
                }
                break;
            case '08':
                if (contaLogada) {
                    contaLogada.exibirMensagens(redeSocial);
                }
            case '00':
                console.log('Encerrando o simulador...');
                return { value: void 0 };
                //               case '00':
                //               if (contaLogada) {
                //                   redeSocial.logout()
                //                   contaLogada = null
                //               } else {
                //                   console.log('Você não está logado.')
                //              }
                break;
            default:
                console.log('Opção inválida.');
        }
    };
    // variável contaLogada é declarada. Ela é do tipo Conta ou null, 
    // o que significa que ela pode armazenar uma instância de Conta (quando um usuário está logado) 
    // ou null (quando nenhum usuário está logado).
    // Inicialmente, contaLogada é definida como null porque, no início do programa, nenhum usuário está logado.
    while (true) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
main();
