const iso8601Pattern = /^-?P((?<年>.+)Y)?((?<月>.+)M)?((?<日>.+)D)?T((?<小时>.+)H)?((?<分>.+)M)?((?<秒>.+)S)?$/
export const iso8601 = (date, hr = false) => {
    return Object.entries(iso8601Pattern.exec(date)?.groups ?? { '秒': 0 })
        .filter(([ , value ]) => !isNaN(value))
        .filter((_, i) => i < 2)
        .flatMap(([ unit, value ], i) => {
            const n = !i && hr && +value < 1 ? Number(value) : parseInt(value)
            return n || !i ? [ n, unit ] : [];
        })
        .join('');
}
