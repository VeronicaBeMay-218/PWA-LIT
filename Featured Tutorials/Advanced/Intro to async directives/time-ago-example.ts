render() {
    return html`
      <p>This page was rendered ${timeAgo(timeNow)}.</p>
      <hr>

      Select your last vacation:
      <input type="date" .valueAsDate=${this.chosenTime} @change=${this.updateTime}>
      <p>Your last vacation was ${timeAgo(this.chosenTime)}.</p>
      <hr>

      <comment-card user="litdeveloper"
                    time=${timeAgo(timeNow)}
                    subject="Just tried AsyncDirectives!"
                    content="I just tried out these AsyncDirectives in Lit and they're pretty powerful!">
      </comment-card>
    `;
  }
  /* playground-hide */

  updateTime(event: Event) {
    const target = event.target as HTMLInputElement;
    this.chosenTime = target.valueAsDate!;
  }

}
/* playground-hide-end */
