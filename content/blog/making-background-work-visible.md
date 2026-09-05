---
title: "Making background work visible"
description: "A few notes from building an agents view, and why the states around the main screen deserve attention too."
date: "2026-09-05"
tags: ["Engineering", "Interface design"]
language: en
draft: false
---

Recently, I worked on an agents view at Kinebot. The idea was to give people a clearer picture of work happening in the background.

That sounds straightforward: show some cards, add a status, and keep the page updated. But there is a difference between displaying activity and helping someone understand it.

## From a layout to a working view

The work went through several iterations, from the initial screen and visual adjustments to connecting the interface to live data. Along the way, I worked on responsive layouts, translations, access handling, and tests.

Looking back through those commits, what stands out is how much of the work sits around the main view. What happens before data arrives? What does an empty page communicate? Does the layout still make sense on a smaller screen? Does the interface show only what the person viewing it should be able to see?

Those details are part of the feature. A screenshot captures very little of them.

## Queues, workers, and heartbeats

The processing happens asynchronously. Jobs wait in a queue, and workers pick them up independently of the browser. That means the page has to represent several different things: work waiting to start, work currently running, and work that has finished.

Worker availability is a separate signal. Workers send periodic heartbeats so the backend can track whether they have reported recently and whether they are busy. The heartbeat publisher runs independently of the processing loop, allowing a worker to keep reporting while it handles a job.

A heartbeat tells us that a worker has checked in. It does not, by itself, prove that its current job is making progress. Job status and lifecycle events provide the other part of that picture. Keeping those signals separate helps avoid treating an active process as evidence that everything is moving forward.

## Getting that state onto the screen

For this view, I used periodic HTTP polling through a query hook. WebSockets were not part of the implementation. The browser refreshes a backend snapshot, and background polling is disabled when the page is not active.

The backend combines worker information, queued and running jobs, recent results, and job events. Access rules apply before that information reaches the interface. A mapping layer then turns the response into the data the cards and summary need to display.

There is a tradeoff here: the screen updates on the next refresh rather than receiving every change immediately. It also avoids maintaining a persistent browser connection. The UI still needs to distinguish loading, empty, and error states from the state of the work itself.

The tests cover different parts of that flow, including heartbeat reporting, the API response, frontend mapping, and the page. Responsive checks cover whether the same information remains readable on smaller screens.

## The interface is part of the engineering

I like working across this boundary. The information a system provides and the way an interface presents it affect each other. A page can look convincing with sample data and still need considerable work once it has to represent changing activity.

For me, that is a reason to spend time on the less visible parts: how data becomes a view, how states change, and how to check that those changes behave as expected.
