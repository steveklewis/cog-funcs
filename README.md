# Intro to Cognitive Functions for Programmers

## Perceiving Functions

The Perceiving Functions are filters that limit the data we might pay attention to. Perceiving Functions are also differentiated by the manner of time involved. For instance, Introverted Sensing attends to things that have happened in the past. Extraverted Sensing attends to things that are happening right now.

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

}


```
