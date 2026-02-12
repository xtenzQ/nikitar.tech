---
title: Hello World
description: My first blog post — testing syntax highlighting and Markdown rendering.
date: '2025-02-12'
tags:
  - intro
  - java
draft: false
---

Welcome to my blog! This is a placeholder post to verify that everything works correctly.

## A Java Example

Here's a simple Spring Boot controller:

```java
@RestController
@RequestMapping("/api/greetings")
public class GreetingController {

    @GetMapping("/{name}")
    public String greet(@PathVariable String name) {
        return "Hello, " + name + "!";
    }
}
```

## What to Expect

I plan to write about:

- Backend development with Java and Kotlin
- Machine learning experiments
- System design and architecture
- Developer tools and productivity

Stay tuned!
