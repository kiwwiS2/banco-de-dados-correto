const getCSS = (variavel) => {
const bodySyles =getComputedStyle(document.body)
 return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS(--font),
    size: 16,
    color: getCSS('--primary-color')
}

export{getCSS, tickConfig                                                                                                                                                                                                                                                                                                                                                                                    }