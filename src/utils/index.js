export function getNameRation(ration){
    const rations_names = [
        {
            id: "factory_new",
            name: "Прямо с завода",
            color: "factory_new",
        },
        {
            id: "minimal_wear",
            name: "Немного поношенное",
            color: "minimal_wear",
        },
        {
            id: "field_tested",
            name: "После полевых испытаний",
            color: "field_tested",
        },
        {
            id: "well_worn",
            name: "Поношенное",
            color: "well_worn",
        },
        {
            id: "battle_scarred",
            name: "Закаленное в боях",
            color: "battle_scarred",
        }
    ];

    const foundRation = rations_names.find(item => item.id === ration);
    return foundRation ? foundRation.name : "Неизвестное качество";
}