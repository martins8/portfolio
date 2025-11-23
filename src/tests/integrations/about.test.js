test("test about page", async () => {
  const response = await fetch("http://localhost:3001/about");
  expect(response.status).toBe(200);
});
