import { Example } from "../../entities/Example"

export interface ExampleRepository {
  getExampleById(id: string): Promise<Example>
  getExampleByName(name: string): Promise<Array<Example>>
  getPaginatedExample(page?: number, quantity?: number, fields?: Array<{ "field": "value", "value": "value" }>): Promise<Array<Example>>
  updateExample(example: Example, id: string): Promise<void>
  addExample(example: Example): Promise<void>
}