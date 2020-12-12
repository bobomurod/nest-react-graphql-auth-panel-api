enum Status {
    TODO,
    INPROGRESS,
    PENDING,
    DONE
}

export class CreateTodosDto {
    readonly title: string;
    readonly description: string;
    readonly status: Status;
}