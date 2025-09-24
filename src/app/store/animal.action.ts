export class getAnimal {
  static readonly type = '[Zoo] Add Animal';

  constructor() {}
}
export class EditAnimal {
  static readonly type = '[Zoo] Edit Animal';

  constructor(public name: string) {}
}
export class DeleteAnimal {
  static readonly type = '[Zoo] Delete Animal';

  constructor(public name: string) {}
}