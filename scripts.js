let botao = document.querySelector(".botao-gerar")
let endereco = "https://api.groq.com/openai/v1/chat/completions"

    async function gerarCodigo() {

    let textoUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo = document.querySelector(".texto-gerado")
    let resultadoCodigo = document.querySelector(".codigo-animacao")

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate. Caso o usuário peça um texto, faça-o com color white e aplique um background-color #141419, não manipule padding's, margin's e nem bordas, deixa essa parte comigo"
                },
                {
                    role: "user",
                    content: textoUsuario
                }
            ]
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    blocoCodigo.textContent = (resultado)
    resultadoCodigo.srcdoc = (resultado)
}

botao.addEventListener("click", gerarCodigo)

    