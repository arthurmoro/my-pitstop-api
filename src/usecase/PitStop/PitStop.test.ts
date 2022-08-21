import { PitStopRepositoryInMemory } from "../../repository/PitStop/PitStopRepositoryInMemory";
import { AddPitStop } from "./Add"
import { AddPitStopType } from "./Add/AddPitStopType";
import { ListPitStop } from "./List";
import { UpdatePitStop } from "./Update";

describe("PitStop", () => {
  let pitStopRepository;
  beforeAll(() => {
    pitStopRepository = new PitStopRepositoryInMemory();
  });
  it("Should add new pitstop", async () => {
    const addPitStop = new AddPitStop(pitStopRepository)
    const pitStop: AddPitStopType = {
      title: "New PitStop",
      coordinates: [-13.005141656597935, -38.526073028729364],
      address: {
        street: "Rua Aracaju",
        neighbor: "Barra",
        number: "199",
        city: "Bahia"
      },
      createdById: "1"
    }
    await addPitStop.execute(pitStop);
  })
  it("Should search PitStops for user", async () => {
    const listPitStop = new ListPitStop(pitStopRepository);
    const result = await listPitStop.execute("1");
    expect(result.length).toBe(1)
  });

  it("Should update a added PitStop", async () => {
    const listPitStop = new ListPitStop(pitStopRepository)
    const result = await listPitStop.execute("1");
    const pitStop = result[0];
    pitStop.description = "Isso é uma nova descrição";
    pitStop.title = "Isso é um novo título";

    const update = new UpdatePitStop(pitStopRepository);

    update.execute(pitStop, pitStop.id);

    const newResult = await listPitStop.execute("1");
    expect(newResult[0].description).toBe("Isso é uma nova descrição")
    expect(newResult[0].title).toBe("Isso é um novo título")
  });
})