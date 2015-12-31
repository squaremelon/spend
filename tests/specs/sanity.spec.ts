describe('meta-tests', () => {

  it('are able to handle the truth', () => {
    expect(true).toBe(true);
  });

  it('are able to do some maths', () => {
    expect(2).not.toBeGreaterThan(3);
    expect(10).toBeGreaterThan(6);
  });

});
