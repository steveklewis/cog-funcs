# Intro to Cognitive Functions for Programmers

There are eight Jungian cognitive functions. They are:

* Extraverted Sensing
* Introverted Sensing
* Extraverted Intuition
* Introverted Intuition
* Extraverted Feeling
* Introverted Feeling
* Extraverted Thinking
* Introverted Thinking

## Perceiving Functions

The Perceiving Functions are filters that limit the data we might pay attention to. Perceiving Functions are also differentiated by the manner of time involved. For instance, Introverted Sensing attends to concrete things that have happened in the past. Extraverted Sensing attends to concrete things that are happening right now in the world. Extraverted Intuition attends to abstract things that are happening right now in one's mind. Introverted Intuition attends to abstract knowledge.



### Extraverted Sensing

```
function extravertedSensingFilter(data) {
  if (data.concrete && data.now) {
    return true;
  }
  return false;
}

```

### Introverted Sensing

```

function introvertedSensingFilter(data) {
  if (data.concrete && data.past) {
    return true
  }
  return false;
}

```

### Extraverted Intuition

```

function extravertedIntuitionFilter(data) {
  if (data.abstract && data.now) {
    return true;
  }
  return false;
}

```

### Introverted Intuition

```

function introvertedIntuitionFilter(data) {
  if (data.abstract && data.past) {
    return true;
  }
  return false;
}

```
