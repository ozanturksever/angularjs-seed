describe('Main', function () {
    beforeEach(function () {
        browser().navigateTo(url)
    });

    it('should be in url /', function () {
        expect(browser().location().url()).toBe('/');
    })

});
