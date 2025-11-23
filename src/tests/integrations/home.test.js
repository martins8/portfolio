test("test home page", async () => {
  const response = await fetch("http://localhost:3001");
  expect(response.status).toBe(200);
});
