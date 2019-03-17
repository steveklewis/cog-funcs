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


## Judging Functions


After filtering, the mind then judges each piece of data coming in. Is it true? Is it false? It is good? This sorting process is analagous to a mapping function in programming:


### Extraverted Feeling

```

function extravertedFeelingMap(data) {

  if (data.good && data.group) {
    return true;
  }
  return false;
}

```

### Introverted Feeling

```

function introvertedFeelingMap(data) {
  if (data.good && data.individual) {
    return true;
  }
  return false;
}

```



### Extraverted Thinking

```

function extravertedThinkingMap(data) {
  if (data.true && data.practical) {
    return true;
  }
  return false;
}

```


### Introverted Thinking

```

function introvertedThinkingMap(data) {
  if (data.true && data.logical) {
    return true;
  }
  return false;
}

```


## Storing Our Judgments

After judging each piece of data that comes in, we store it internally into a growing database of experiences. This database represents the knowledge we have accumulated over time. Similarly, a filtering mechanism is used to figure out which store we put it in:

###

Introverted Sensing

```

function storeInIntrovertedSensingFilter(data) {
  return data.concrete;
}

```

If the data has a mostly concrete nature, we store that piece of data, with its judgement, into our memories.


###

Introverted Intuition

```

function storeInIntrovertedIntuitionFilter(data) {
  return data.abstract;
}

```

If the data has a mostly abstract nature, we store that piece of data, with its associated judgement, into our knowledge base of abstractions.


Inspired by:

* Host Eric @ TwFP
* DaveSuperPowers
* Carolyn Zaikowski
* Chad Crandall
* Erik Thor
* Geek Psychology
* Personality Hacker
* Personality Junkie
* Leon @ Type Tips
