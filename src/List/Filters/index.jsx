import React from 'react';
import { Filters, Icon, Gender, Size, Item, Label } from './styled';

export default () => (
  <Filters>
    <Icon>
      <img src={require('./filter.svg')} alt="filter icon" />
    </Icon>

    <Gender>
      <Item isActive>Man</Item>
      <Item>Woman</Item>
    </Gender>

    <Size>
      <Label>Size</Label>
      <Item>36</Item>
      <Item>37</Item>
      <Item>38</Item>
      <Item>39</Item>
      <Item>40</Item>
      <Item isActive>41</Item>
      <Item>42</Item>
    </Size>
  </Filters>
);
