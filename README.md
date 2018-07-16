# Flexbox
Grid flebox CSS3

## Grid
The grid is a 12-column fluid grid, that shrinks with the browser/device at smaller sizes. The syntax is simple and it makes coding responsive much easier. Go ahead, resize the browser. 

### Auto Width

Add any number of auto sizing columns to a row. Let the grid figure it out.

```
<div class="row">
    <div class="col">
        <div class="box"></div>
    </div>
    <div class="col">
        <div class="box"></div>
    </div>
    <div class="col">
        <div class="box"></div>
    </div>
</div>
```

### Responsive

Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths. The syntax is simple and it makes coding responsive much easier. Go ahead, resize the browser.

```
<div class="row">
    <div class="col xs-12 sm-8 md-6 lg-4">
        <div class="box"></div>
    </div>
    <div class="col xs-12 sm-8 md-6 lg-4">
        <div class="box"></div>
    </div>
    <div class="col xs-12 sm-8 md-6 lg-4">
        <div class="box"></div>
    </div>
</div>
```

| Key  | Media Query | Applies |
| ------------- | ------------- | ------------- |
| none | none  | always |
| sm | @media screen and (min-width: 48em)  | ≥ 768px |
| md | @media screen and (min-width: 64em)  | ≥ 1024px |
| lg | @media screen and (min-width: 75em)  | ≥ 1200px |

### Offset

Offset a column.

```
<div class="row">
    <div class="col xs-1 xs-offset-11">
        <div class="box"></div>
    </div>
    <div class="col xs-2 xs-offset-10">
        <div class="box"></div>
    </div>
    <div class="col xs-3 xs-offset-9">
        <div class="box"></div>
    </div>
    . . .
</div>
```

### Alignment

Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.

#### Start

```
<div class="row start-xs">
    <div class="col xs-6">
        <div class="box"></div>
    </div>
</div>
```

#### Center

```
<div class="row center-xs">
    <div class="col xs-6">
        <div class="box"></div>
    </div>
</div>
```

#### End

```
<div class="row end-xs">
    <div class="col xs-6">
        <div class="box"></div>
    </div>
</div>
```

#### Top

```
<div class="row top-xs">
    <div class="col xs-6">
        <div class="box box-high"></div>
    </div>
    <div class="col xs-6">
        <div class="box"></div>
    </div>
</div>
```

#### Middle

```
<div class="row middle-xs">
    <div class="col xs-6">
        <div class="box box-high"></div>
    </div>
    <div class="col xs-6">
        <div class="box"></div>
    </div>
</div>
```

#### Bottom

```
 <div class="row bottom-xs">
    <div class="col xs-6">
        <div class="box box-high"></div>
    </div>
    <div class="col xs-6">
        <div class="box"></div>
    </div>
</div>
```

### Distribution

Add classes to distribute the contents of a row or column.

#### Around

```
<div class="row around-xs">
    <div class="col xs-2">
        <div class="box"></div>
    </div>
    <div class="col xs-2">
        <div class="box"></div>
    </div>
    <div class="col xs-2">
        <div class="box"></div>
    </div>
</div>
```

#### Between

```
<div class="row between-xs">
    <div class="col xs-2">
        <div class="box"></div>
    </div>
    <div class="col xs-2">
        <div class="box"></div>
    </div>
    <div class="col xs-2">
        <div class="box"></div>
    </div>
</div>
```

### Reordering

#### First

```
<div class="row">
    <div class="col">
        <div class="box">1</div>
    </div>
    <div class="col">
        <div class="box">2</div>
    </div>
    <div class="col first-xs">
        <div class="box">3</div>
    </div>
</div>

```

#### Last

```
<div class="row">
    <div class="col last-xs">
        <div class="box">1</div>
    </div>
    <div class="col">
        <div class="box">2</div>
    </div>
    <div class="col">
        <div class="box">3</div>
    </div>
</div>
```

### Reversing

```
 <div class="row reverse">
    <div class="col">
        <div class="box">1</div>
    </div>
    <div class="col">
        <div class="box">2</div>
    </div>
    <div class="col">
        <div class="box">3</div>
    </div>
</div>
```
