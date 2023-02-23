import React from 'react'
import {HiUserGroup, HiBriefcase, HiDocumentText, HiIdentification} from 'react-icons/hi'
import {ImHammer2, ImUserTie} from 'react-icons/im'

import styles from "@/styles/Actuation.module.sass"

export default function Actuation() {

    const areas = [
        {name: "Advocacia Civil", icon: <HiUserGroup />, description: "Medidas Cautelares, despejos, revisão e arbitramento de aluguéis, renovatória de contrato de locação, possessórias, usucapião, embargos, consignação em pagamento, prestação de contas, ação monitória, concordata, falência, juizado de pequenas causas, cobranças, execuções, contratos, danos morais e materiais, responsabilidade civil, direitos do consumidor, indenizações."},
        {name: "Advocacia Trabalhista", icon: <HiBriefcase />, description: "Reclamações e cálculos trabalhistas, horas extras, autônomos, trabalho sem registro, terceirização, pejotização, adicionais de insalubridade, periculosidade e noturno, cooperativas, danos morais e materiais, doenças e acidentes de trabalho, indenizações, FGTS, seguro-desemprego, verbas rescisórias, intervalo suprimido, justa causa, rescisão indireta, trabalho doméstico (empregador e empregado)."},
        {name: "Advocacia Tributária", icon: <HiDocumentText />, description: "Ação Declaratória, Mandado de Segurança, Execução Fiscal e Defesas do Executado, Ação Repetitória, Ação Anulatória, Ação Consignatória, Juizados Especiais da Fazenda Pública, PAF, Liminar, Ações de Competência Originária no STF, Recursos e Defesas do Réu, Impostos Municipais, Estaduais e Federais, Taxas e Contribuição de Melhoria."},
        {name: "Família e Sucessões", icon: <ImHammer2 />, description: "Inventários e arrolamentos, habilitação de créditos, testamentos, separação consensual, separação judicial, divórcio, anulação de casamento, investigação de paternidade, ação de alimentos, regulamentação de visita, pedidos de alvarás."},
        {name: "Advocacia Empresarial ", icon: <ImUserTie />, description: "Processos em geral, assistência jurídica, contratos, contestação de reclamações e audiências trabalhistas, civis, juizado especial, orientações preventivas para empresas, aberturas de empresa, alterações e cancelamentos."},
        {name: "Advocacia Previdenciária", icon: <HiIdentification />, description: "Indenizações previdenciárias por acidente de trabalho e orientações em geral de assuntos do INSS."},
    ]

  return (
    <div id="actuation" className={styles.actuation}>
        <h1>Áreas de Atuação</h1>
        <ul className={styles.actuation_list}>
            {areas.map((area) => (
                <li key={area.name} className={styles.actuation_list_item}>
                    <div className={styles.item_wrapper}>
                        <div className={styles.item_header}>
                            {area.icon}
                            <h2>{area.name}</h2>
                        </div>
                        <div className={styles.item_content}>
                            <p>{area.description}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
