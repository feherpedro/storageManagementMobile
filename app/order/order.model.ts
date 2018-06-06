export class OrderEntity {
    constructor(
        public id?: number,
        public createDate?: any,
        public paymentDate?: any,
        public dueDate?: any,
        public statusId?: number
    ) {
    }
}
