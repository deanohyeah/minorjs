/**
 * Copyright 2014 Skytap Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var FunctionalTest = require('../../lib/functional_test');

describe('/random', function () {
  FunctionalTest.setup().run();

  it('should successfully load the random color page', function (done) {
    FunctionalTest.browser.visit(FunctionalTest.getUrl('/random'))
      .then(function () {
        FunctionalTest.browser.location.pathname.should.eql('/random');
        FunctionalTest.browser.text('h1').should.match(/Today's color of the day is: (\w*)./);
        done();
      })
      .done();
  });
});