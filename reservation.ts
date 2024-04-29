export interface TableList {
    id: number;
    seat: number;
}

let tableList: TableList[] = [
    { id: 1, seat: 4 },
    { id: 2, seat: 6 },
    { id: 3, seat: 2 },
    { id: 4, seat: 8 },
    { id: 5, seat: 4 },
    { id: 6, seat: 4 },
    { id: 7, seat: 4 },
    { id: 8, seat: 4 },
    { id: 9, seat: 10 },
    { id: 10, seat: 1 },
    { id: 11, seat: 3 },
    { id: 12, seat: 4 },
    { id: 13, seat: 4 },
    { id: 14, seat: 2 },
    { id: 15, seat: 4 },
    { id: 16, seat: 4 },
    { id: 17, seat: 5 },
    { id: 18, seat: 3 },
    { id: 19, seat: 4 },
];

const maxCapacityList = 120;
let totalReservedSeats = tableList.reduce((total, table) => total + table.seat, 0);


function getTable(availableNumberSeats: number | null) {
    const remainingSeats = maxCapacityList - totalReservedSeats;

    if (availableNumberSeats !== null && availableNumberSeats <= remainingSeats) {
        return `Here's some space. ${remainingSeats} remaining seats.`;
    } else {
        return "Sold out";
    }
}

console.log(getTable(56));
console.log(getTable(28));