export class User {
    public readonly id?: string
    public name: string
    public email: string
    public password: string
    public startDate?: Date

    constructor(props: User) {
        if (props.id) {
            this.id = props.id
        }

        if (props.startDate) {
            this.startDate = props.startDate
        }

        this.name = props.name,
        this.email = props.email,
        this.password = props.password
    }
}