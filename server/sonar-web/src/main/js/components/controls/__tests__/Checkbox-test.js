/*
 * SonarQube
 * Copyright (C) 2009-2016 SonarSource SA
 * mailto:contact AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import Checkbox from '../Checkbox';

chai.use(sinonChai);

function click (element) {
  return element.simulate('click', {
    target: { blur () {} },
    preventDefault () {}
  });
}

describe('Components :: Controls :: Checkbox', () => {
  it('should render unchecked', () => {
    const checkbox = shallow(
        <Checkbox checked={false} onCheck={() => true}/>
    );
    expect(checkbox.is('.icon-checkbox-checked')).to.equal(false);
  });

  it('should render checked', () => {
    const checkbox = shallow(
        <Checkbox checked={true} onCheck={() => true}/>
    );
    expect(checkbox.is('.icon-checkbox-checked')).to.equal(true);
  });

  it('should render unchecked third state', () => {
    const checkbox = shallow(
        <Checkbox checked={false} thirdState={true} onCheck={() => true}/>
    );
    expect(checkbox.is('.icon-checkbox-single')).to.equal(true);
    expect(checkbox.is('.icon-checkbox-checked')).to.equal(false);
  });

  it('should render checked  third state', () => {
    const checkbox = shallow(
        <Checkbox checked={true} thirdState={true} onCheck={() => true}/>
    );
    expect(checkbox.is('.icon-checkbox-single')).to.equal(true);
    expect(checkbox.is('.icon-checkbox-checked')).to.equal(true);
  });

  it('should call onCheck', () => {
    const onCheck = sinon.spy();
    const checkbox = shallow(
        <Checkbox checked={false} onCheck={onCheck}/>
    );
    click(checkbox);
    expect(onCheck).to.have.been.calledWith(true);
  });
});
