import {delay} from "../delay";

test("that delay works as expected", async () => {

    const time = Date.now()
    await delay(1000);
    const newTime = Date.now();
    expect(newTime).toBeGreaterThanOrEqual(time + 1000);

})
