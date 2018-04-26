import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  }, jasmine.DEFAULT_TIMEOUT_INTERVAL);

  it('should increment totalVotes when upvoted', () => {
    // Arrange
    // let component = new VoteComponent();

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // Arrange
    // let component = new VoteComponent();

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
