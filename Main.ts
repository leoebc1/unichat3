import { Conta } from "./Conta"
import { Rede } from "./Rede";
import { Post } from "./Post"
import * as readlineSync from 'readline-sync';

console.log("teste")
function main() {
    const redeSocial = new Rede()  // cria nova instância da classe Feed, 
                                   //que é responsável por gerenciar contas e posts na rede social.
    let contaLogada: Conta | null = null
                                  // variável contaLogada é declarada. Ela é do tipo Conta ou null, 
                                  // o que significa que ela pode armazenar uma instância de Conta (quando um usuário está logado) 
                                  // ou null (quando nenhum usuário está logado).
                                  // Inicialmente, contaLogada é definida como null porque, no início do programa, nenhum usuário está logado.

    while (true) {
        console.clear()
        console.log(`
         ▄         ▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
        ▐░▌       ▐░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
        ▐░▌       ▐░▌▐░▌░▌     ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ 
        ▐░▌       ▐░▌▐░▌▐░▌    ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
        ▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌     ▐░▌     ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     
        ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     
        ▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌     ▐░▌     ▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     
        ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
        ▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
        ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
         ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀       ▀      
                                                                                                   `)
        if(contaLogada){
            console.log(`USERNAME: ${contaLogada.getNomeUsuario()}. ${contaLogada.getSeguindo()}`)
        }
        console.log('[01] Criar conta\n[02] Login\n[03] Logout\n[04] Criar post\n[05] Ver feed\n[06] Seguir usuário\n[07] Enviar mensagem\n[08] Ver mensagens\n[00] Sair')
        const escolha = readlineSync.question('Escolha opcao: ')

        switch (escolha) {
            case '01':
                contaLogada = redeSocial.criarConta()
                break
            case '02':
                contaLogada = redeSocial.login()
                break

            case '03':
                    if (contaLogada) {
                        redeSocial.logout()
                        contaLogada = null
                    } else {
                        console.clear()
                        readlineSync.question("Você não está logado. Tecle ENTER para continuar...") 
                    }

            case '04':
                if (contaLogada) {
                    const conteudo = readlineSync.question('Conteudo do post: ')
                    contaLogada.criarPost(conteudo)
                    console.log('Post criado com sucesso!')
                } else {
                    console.log('Você precisa estar logado para criar um post.')
                }
                break

            case '05':
                if (contaLogada) {
                    for(let conta of redeSocial.contas){
                        if(contaLogada.getSeguindo().includes(conta.getId())){
                            redeSocial.puxarPosts(conta)
                        }    
                    }
                } else {
                    readlineSync.question('Você precisa estar logado para ver o feed. Tecle ENTER para continuar...')
                }
                break

            case '06':
                if (contaLogada) {
                    const idParaSeguir = readlineSync.questionInt('ID da conta para seguir: ')
                    const contaParaSeguir = redeSocial.contas.find(c => c.getId() === idParaSeguir)
                    if (contaParaSeguir) {
                        contaLogada.seguir(contaParaSeguir)
                        console.log(`Agora você está seguindo ${contaParaSeguir.getNomeUsuario()}.`)
                    } else {
                        console.log('Conta não encontrada.')
                    }
                } else {
                    console.log('Você precisa estar logado para seguir um usuário.')
                }
                break

            case '07':
                if (contaLogada) {
                    const idDestino = readlineSync.questionInt('ID da conta para enviar mensagem: ')
                    const contaDestino = redeSocial.contas.find(c => c.getId() === idDestino)
                    if (contaDestino) {
                        const mensagem = readlineSync.question('Mensagem: ')
                        contaLogada.enviarMensagem(contaDestino, mensagem)
                        readlineSync.question("Mensagem enviada com sucesso. Tecle ENTER para continuar...") 
                    } else {
                        readlineSync.question("Conta não encontrada. Tecle ENTER para continuar...") 
                    }
                } else {
                    readlineSync.question("Você precisa estar logado para isso. Tecle ENTER para continuar...") 
                }
                break
                case '08':
                    if(contaLogada){
                        contaLogada.exibirMensagens(redeSocial)
                    }
                case '00':
                    console.log('Encerrando o simulador...')
                    return

 //               case '00':
 //               if (contaLogada) {
 //                   redeSocial.logout()
 //                   contaLogada = null
 //               } else {
 //                   console.log('Você não está logado.')
  //              }
                break


                default:
                console.log('Opção inválida.')
        }
    }
}

main()