
export const Api = () => {
    // let rate = 3.3
    return fetch('https://api.nbrb.by/exrates/rates?periodicity=0')
        .then(response => response.json())
        .then(data => {
            const usd = data.findIndex(function (cur) {
                return cur.Cur_Abbreviation === "USD"
            })
            return  data[usd].Cur_OfficialRate

        })



}