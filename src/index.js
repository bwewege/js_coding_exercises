


  const staffCount = staff.reduce((c, s) => {
    if (s.rota.includes(day)) {
      return c + 1;
    }
    return c;
  }, 0);

  return staffCount >= 3;
}
