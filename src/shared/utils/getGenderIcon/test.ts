import getGenderIcon from '.';

describe('utils/getGenderIcon', () => {
  it('returns correnct icon for male', () => {
    expect(getGenderIcon('male')).toStrictEqual('Man');
  });

  it('returns correnct icon for female', () => {
    expect(getGenderIcon('female')).toStrictEqual('Woman');
  });

  it('returns correnct icon for other strings', () => {
    expect(getGenderIcon('asdasdasd')).toStrictEqual('MessageQuestion');
  });
});
